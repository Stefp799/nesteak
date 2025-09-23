import React from 'react'

function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms of Service & SMS Policy</h1>
          <p className="terms-subtitle">New England Steak & Seafood</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>SMS Text Message Communications</h2>
            <p>
              By providing your mobile phone number and checking the SMS consent box during reservation,
              you agree to receive text messages from New England Steak & Seafood at (833) 722-3840.
            </p>

            <h3>Types of Messages</h3>
            <ul>
              <li>Reservation confirmation messages</li>
              <li>Reservation reminder notifications</li>
              <li>Important updates about your reservation</li>
              <li>Cancellation confirmations</li>
            </ul>

            <h3>Message Frequency</h3>
            <p>
              You may receive up to 3 messages per reservation: confirmation, reminder, and follow-up.
              Message frequency depends on your interaction with our reservation system.
            </p>

            <h3>Message & Data Rates</h3>
            <p>
              Message and data rates may apply. Standard text messaging rates from your wireless
              carrier will apply to all SMS communications.
            </p>

            <h3>Opt-Out Instructions</h3>
            <p>
              You may opt out of SMS communications at any time by:
            </p>
            <ul>
              <li>Replying <strong>STOP</strong> to any text message</li>
              <li>Calling us at (508) 478-0871</li>
              <li>Emailing us at info@nesteak.com</li>
            </ul>

            <h3>Supported Carriers</h3>
            <p>
              Our SMS service works with all major carriers including Verizon, AT&T, T-Mobile, Sprint,
              and most other wireless providers.
            </p>

            <h3>Privacy</h3>
            <p>
              We respect your privacy. Your phone number will only be used for reservation-related
              communications and will not be shared with third parties for marketing purposes.
            </p>
          </section>

          <section className="terms-section">
            <h2>Reservation Policy</h2>
            <p>
              Table guarantee holds are authorization holds on your payment method and will be
              released when you arrive for your reservation.
            </p>

            <h3>Cancellation Policy</h3>
            <ul>
              <li>Cancel up to 2 hours before your reservation time - no charge</li>
              <li>No-shows or late cancellations may result in hold capture</li>
              <li>Weather or emergency exceptions may apply</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <p><strong>Phone:</strong> (508) 478-0871</p>
              <p><strong>SMS:</strong> (833) 722-3840</p>
              <p><strong>Email:</strong> info@nesteak.com</p>
              <p><strong>Address:</strong> Route 16, Mendon MA</p>
            </div>
          </section>

          <div className="terms-footer">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              For questions about this policy, please contact us at (508) 478-0871 or
              email info@nesteak.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage