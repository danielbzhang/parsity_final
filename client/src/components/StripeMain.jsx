import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeForm from './StripeForm';

// const PUBLIC_KEY = `${process.env.REACT_APP_STRIPE_PUBLIC}`;
const PUBLIC_KEY =
  'pk_test_51LrXV7GYfyzkTIYrVK2DafROIkKyH9org6xikSCYS1DvyNIKfL0rq1Oshv3WL8EsfAA51Njl8aQeSCMcv92Zjzy700tC84MKAX';
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
