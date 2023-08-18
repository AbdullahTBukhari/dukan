// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NekwjBWAhgHqpNplT1sfoehaoJlm7kSTKopEAnR8vKG844GO7gEJsp7QUC2tlRwV2wBY0cTO6rGwXAjMWztjJVw00anqIAwgG');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json)

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const lineItems = (req.body)
  console.log(req.body)
  // console.log(JSON.parse(req.body))
  // console.log(req.body.cartProduct)
  // console.log(JSON.parse(req.body.cartProduct))
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));