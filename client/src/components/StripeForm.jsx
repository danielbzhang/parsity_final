import React from 'react';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import '../css/stripeform.css';
// docs boiler code for styling
const cardStyling = {
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },
  },
};

// from Github stripe/react-stripe-js -- using hooks
const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
      alert(error);
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
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type='submit' disabled={!stripe || !elements}>
          Donate $5
        </button>
      </form>
    </>
  );
};

export default StripeForm;
