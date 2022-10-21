const express = require('express');
const router = express.Router();
require('dotenv').config();
const keys = require('../config/keys');
// const stripe = require('stripe')(process.env.STRIPE_SECRET);
const stripe = require('stripe')(keys.STRIPE_SECRET);

router.post('/payment', async (req, res) => {
  const { amount, id } = req.body;
  try {
    await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Donation to Badminton Club',
      payment_method: id,
      confirm: true,
    });
    return res.status(200).json({ msg: 'Transaction Successful' });
  } catch (err) {
    console.log('Error in stripe.js', err);
    return res.status(500).json({ msg: 'Transaction Unsuccessful' });
  }
});

module.exports = router;
