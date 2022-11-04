const express = require('express');
const Tournament = require('../models/Tournament');
const Player = require('../models/Player');
const router = express.Router();

const passportService = require('../controllers/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/api/tours', requireAuth, async (req, res) => {
  try {
    const { title, hostDate, hostLocation } = req.body;
    const newTour = await Tournament.create({
      title,
      hostDate,
      hostLocation,
      createdAt: Date.now(),
    });
    await newTour.save();
    // return res.status(200).json(newTour);
    return res.status(200);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get('/api/tours', requireAuth, (req, res, next) => {
  try {
    const perPage = 9;
    const page = req.query.page || 1;

    Tournament.find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .sort({ createdAt: 'desc' })
      .exec((err, tours) => {
        Tournament.count().exec((err, toursCount) => {
          if (err) return next(err);
          res.status(200).send({ tours, toursCount });
        });
      });
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get('/tours/:id', requireAuth, async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tournament.findById(id).populate('players');
    return res.status(200).json(tour);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
// +++++++++++

router.put('/tours/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // const { title, hostDate, hostLocation } = req.body;
    // const update = { title, hostDate, hostLocation };
    const { title, date, location } = req.body;
    const update = { title, date, location };
    const updatedTour = await Tournament.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    return res.status(200).json(updatedTour);
    // return res.status(200);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.delete('/tours/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tournament.findByIdAndDelete(id);

    return res.status(200).json(tour);
    // return res.status(200);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.post('/tours/:id/player', async (req, res, next) => {
  const id = req.params.id;
  const { firstname, lastname, sex, phone, email } = req.body;

  const newPlayer = await Player.create({
    firstname,
    lastname,
    sex,
    phone,
    email,
  });
  // await newPlayer.save();
  Tournament.findOneAndUpdate(
    { _id: id },
    { $push: { players: newPlayer } },
    { new: true }
  )
    .populate('players')
    .exec((err, tour) => {
      if (err) {
        res.status(400).send(err);
        return next(err);
      } else {
        res.status(200).send(tour);
      }
    });
});

router.get('/tours/:id/player', async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tournament.findById(id).populate('players');

    return res.status(200).json(tour);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.delete('/tours/:tourID/table/:playerID', async (req, res) => {
  try {
    const { tourID, playerID } = req.params;
    const player = await Player.findByIdAndDelete(playerID);
    const tour = await Tournament.findById(tourID).populate('players');
    return res.status(200).json(tour);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

module.exports = router;
