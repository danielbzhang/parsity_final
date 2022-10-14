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

module.exports = router;
