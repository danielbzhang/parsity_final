import React from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import '../css/stripeform.css';
// Stripe docs
const cardStyling = {
  style: {
    base: {
      iconColor: 'black',
      color: '#000080',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#000080' },
    },
    invalid: {
      iconColor: '#800080',
      color: '#87bbfd',
    },
  },
};

// Github stripe/react-stripe-js -- using hooks
const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const appearance = {
    theme: 'stripe',
  };

  // Pass the appearance object to the Elements instance
  // const element = stripe.elements({ clientSecret, appearance });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (elements == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      alert('Invalid Card Number');
    } else {
      const config = { amount: 500, id: paymentMethod.id };
      axios
        .post('http://localhost:8000/payment', config)
        .then((response) => {
          // console.log(response);
          alert(response.data.msg);
        })
        .catch((err) => {
          console.log('error in createPaymentMethod', err.message);
        });
    }
  };

  return (
    <>
      <form className='stripe-form' onSubmit={handleSubmit}>
        <CardElement options={cardStyling} />
        <button
          className='stripe-btn'
          type='submit'
          disabled={!stripe || !elements}
        >
          Donate $5
        </button>
      </form>
    </>
  );
};

export default StripeForm;
