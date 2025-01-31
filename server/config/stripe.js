import stripe from 'stripe'

const Stripe = stripe(process.env.STRIPE_SECRETE_KEY)

export default Stripe