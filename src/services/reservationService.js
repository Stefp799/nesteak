// Frontend service for reservation API calls
import { getStripe } from '../utils/stripe.js'

// Base URL for API calls (automatically works with Vercel)
const API_BASE = process.env.NODE_ENV === 'development' ? '' : ''

export const reservationService = {
  // Create authorization hold for reservation
  async createReservationHold(reservationData) {
    try {
      // Demo mode - simulate API response
      if (import.meta.env.VITE_APP_MODE === 'development') {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Generate demo response
        const holdAmount = 25 * parseInt(reservationData.partySize)
        const reservationId = `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

        return {
          success: true,
          reservation_id: reservationId,
          client_secret: `pi_test_demo_${Date.now()}_secret`,
          payment_intent_id: `pi_test_demo_${Date.now()}`,
          hold_amount: holdAmount,
          message: 'Demo: Reservation hold created successfully'
        }
      }

      // Production mode - real API call
      const response = await fetch('/api/reservations/create-hold', {
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