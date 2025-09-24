// Frontend service for reservation API calls
import { getStripe } from '../utils/stripe.js'

// Base URL for API calls (automatically works with Vercel)
const API_BASE = process.env.NODE_ENV === 'development' ? '' : ''

export const reservationService = {
  // Create authorization hold for reservation
  async createReservationHold(reservationData) {
    try {
      // Use Express backend (localhost:3001) in development, Vercel in production
      const apiUrl = import.meta.env.DEV
        ? 'http://localhost:3001/api/reservations/create-hold'
        : '/api/simple-hold'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create reservation hold')
      }

      return data
    } catch (error) {
      console.error('Create reservation hold error:', error)
      throw error
    }
  },

  // Payment is handled on backend, so this just returns the result
  async confirmPayment(clientSecret, paymentMethod) {
    // For demo purposes, the payment is already confirmed on the backend
    // In production with Stripe Elements, this would confirm the payment
    return {
      id: `pi_test_${Date.now()}`,
      status: 'requires_capture'
    }
  },

  // Release authorization hold (staff action)
  async releaseHold(paymentIntentId, reservationId, reason = 'Customer arrived') {
    try {
      const response = await fetch('/api/reservations/release-hold', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_intent_id: paymentIntentId,
          reservation_id: reservationId,
          reason
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to release hold')
      }

      return data
    } catch (error) {
      console.error('Release hold error:', error)
      throw error
    }
  },

  // Capture authorization hold (no-show charge)
  async captureHold(paymentIntentId, reservationId, reason = 'No-show policy enforcement') {
    try {
      const response = await fetch('/api/reservations/capture-hold', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_intent_id: paymentIntentId,
          reservation_id: reservationId,
          reason
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to capture hold')
      }

      return data
    } catch (error) {
      console.error('Capture hold error:', error)
      throw error
    }
  }
}