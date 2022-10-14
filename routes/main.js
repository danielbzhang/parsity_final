const express = require('express');
const Tournament = require('../models/Tournament');
const router = express.Router();

router.post('/api/tours', async (req, res) => {
  try {
    const { title, hostDate, hostLocation } = req.body;
    const newTour = await Tournament.create({
      title,
      hostDate,
      hostLocation,
      createdAt: Date.now(),
    });
    console.log('post newTour:', newTour);
    await newTour.save();
    return res.status(200).json(newTour);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get('/api/tours', async (req, res) => {
  try {
    const tours = await Tournament.find({}).sort({ createdAt: 'desc' });
    return res.status(200).json(tours);
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
    // const tour = await Tournament.findById(id);
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

module.exports = router;
