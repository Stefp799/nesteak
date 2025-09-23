// Vercel serverless function for health check
export default function handler(req, res) {
  res.status(200).json({
    status: 'Server running',
    stripe_configured: !!process.env.STRIPE_SECRET_KEY,
    environment: process.env.NODE_ENV || 'production'
  })
}