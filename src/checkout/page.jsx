

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.pk_test_51PBA5mP16GyuMTN1QfkzudHFxql42neThqgqHGSCg3o0rFnpu17osKS64s4Ydaw1C6xbv6pMRXG9n3EEQb6oAizZ00SL7eD7yw);

const CheckoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const sessionId = router.query.sessionId;

    const handleCheckout = async () => {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error(error);
        // Handle error
      }
    };

    if (sessionId) {
      handleCheckout();
    }
  }, [router.query.sessionId]);

  return <div>Redirecting to checkout...</div>;
};

export default CheckoutPage;
