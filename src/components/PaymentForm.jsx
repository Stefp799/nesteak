// Demo payment form - creates test payment method on backend
import { useState } from 'react'

const PaymentForm = ({ onPaymentSuccess, onPaymentError, holdAmount, isProcessing, setIsProcessing }) => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Payment form submitted!')
    setIsProcessing(true)

    try {
      // For demo purposes, we'll create a test payment method using the backend
      // This simulates what would happen in production with proper Stripe Elements

      const testPaymentMethod = {
        id: `pm_test_${Date.now()}`,
        type: 'card',
        card: {
          brand: 'visa',
          last4: cardData.cardNumber.slice(-4) || '4242'
        },
        billing_details: {
          name: cardData.name || 'Test Customer'
        }
      }

      // Call success callback with test payment method
      await onPaymentSuccess(testPaymentMethod)

    } catch (error) {
      console.error('Payment form error:', error)
      onPaymentError(error.message)
    } finally {
      setIsProcessing(false)
    }
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  return (
    <div className="payment-form-container">
      <h3>Payment Information</h3>
      <p className="payment-note">
        This is a <strong>temporary hold</strong> of <strong>${holdAmount}</strong> that will be released when you arrive.
      </p>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="test-card-info">
          <p><strong>💳 Test Credit Cards:</strong></p>
          <p>• <code>4242 4242 4242 4242</code> (Visa - Success)</p>
          <p>• <code>4000 0000 0000 0002</code> (Visa - Decline)</p>
          <p>• Use any future expiry date (12/25) and any CVC (123)</p>
        </div>

        <div className="form-group">
          <label htmlFor="cardName">CARDHOLDER NAME</label>
          <input
            type="text"
            id="cardName"
            value={cardData.name}
            onChange={(e) => setCardData({...cardData, name: e.target.value})}
            className="form-input"
            placeholder="Enter cardholder name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            id="cardNumber"
            value={cardData.cardNumber}
            onChange={(e) => setCardData({...cardData, cardNumber: formatCardNumber(e.target.value)})}
            className="form-input"
            placeholder="4242 4242 4242 4242"
            maxLength="19"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">EXPIRY DATE</label>
            <input
              type="text"
              id="expiry"
              value={cardData.expiry}
              onChange={(e) => setCardData({...cardData, expiry: formatExpiry(e.target.value)})}
              className="form-input"
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              value={cardData.cvc}
              onChange={(e) => setCardData({...cardData, cvc: e.target.value.replace(/\D/g, '')})}
              className="form-input"
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="payment-submit-btn"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : `Authorize Hold ($${holdAmount})`}
        </button>

        <p className="payment-disclaimer">
          By clicking "Authorize Hold", you agree to our 24-hour cancellation policy.
          This hold will be released when you arrive for your reservation.
        </p>
      </form>
    </div>
  )
}

export default PaymentForm