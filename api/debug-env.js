// Debug endpoint to check environment variables
export default function handler(req, res) {
  res.status(200).json({
    node_env: process.env.NODE_ENV,
    has_stripe: !!process.env.STRIPE_SECRET_KEY,
    has_email_user: !!process.env.EMAIL_USER,
    has_email_pass: !!process.env.EMAIL_PASS,
    has_textbelt: !!process.env.TEXTBELT_API_KEY,
    stripe_key_length: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.length : 0,
    available_env_keys: Object.keys(process.env).filter(key =>
      key.includes('STRIPE') ||
      key.includes('EMAIL') ||
      key.includes('TEXTBELT')
    )
  })
}