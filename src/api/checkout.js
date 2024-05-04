

import Stripe from 'stripe';

const stripe = new Stripe(process.env.sk_test_51PBA5mP16GyuMTN1ujjhNWPY9b6SBOr8dD2bOqqnFmilj3kSReVVk0dH2uDOL8ftyGwzAw4XDfiCtZ71AP3zaatx00z6PHloky);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Your Product',
              },
              unit_amount: 1000, // amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });
      
      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};


