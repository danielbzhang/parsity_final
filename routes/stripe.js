const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

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
    // console.log('Payment', payment);
    res.json({
      message: 'Payment successful',
      success: true,
    });
  } catch (error) {
    console.log('Error in payment', error);
    res.json({
      message: 'Payment failed',
      success: false,
    });
  }
});

module.exports = router;
