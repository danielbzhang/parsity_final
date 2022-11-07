import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeForm from './StripeForm';

const PUBLIC_KEY = `${process.env.REACT_APP_STRIPE_PUBLIC}`;

const stripePromise = loadStripe(PUBLIC_KEY);

const StripeMain = () => {
  return (
    <>
      <div className='stripe-payment'>
        <Elements stripe={stripePromise}>
          <StripeForm />
        </Elements>
      </div>
    </>
  );
};

export default StripeMain;
