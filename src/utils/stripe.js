import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

export const getStripe = () => stripePromise

// Configuration constants
export const STRIPE_CONFIG = {
  holdAmountPerGuest: parseInt(import.meta.env.VITE_HOLD_AMOUNT_PER_GUEST) || 25,
  minimumPartySize: parseInt(import.meta.env.VITE_MINIMUM_PARTY_SIZE) || 5,
  currency: 'usd',
  restaurantName: import.meta.env.VITE_RESTAURANT_NAME || 'New England Steak and Seafood'
}

// Helper function to calculate total hold amount
export const calculateHoldAmount = (partySize) => {
  return STRIPE_CONFIG.holdAmountPerGuest * partySize
}

// Helper function to format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}