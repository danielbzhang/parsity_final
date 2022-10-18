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
    return res.status(200).json(newTour);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get('/api/tours', requireAuth, async (req, res) => {
  try {
    const tours = await Tournament.find({}).sort({ createdAt: 'desc' });
    return res.status(200).json(tours);
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

router.put('/tours/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, hostDate, hostLocation } = req.body;
    const update = { title, hostDate, hostLocation };
    const updatedTour = await Tournament.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    // await todo.save();
    return res.status(200).json(updatedTour);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.delete('/tours/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tournament.findByIdAndDelete(id);

    return res.status(200).json(tour);
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
    // createdAt: Date.now(),
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
