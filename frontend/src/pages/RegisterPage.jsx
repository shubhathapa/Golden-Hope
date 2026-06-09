import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './RegisterPage.css'
 
const API_URL = 'https://golden-hope-1.onrender.com'
 
export default function RegisterPage() {
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  })
 
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
 
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }
 
  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
 
    if (!formData.name || !formData.email || !formData.password) {
      setError('Name, email, and password are required.')
      return
    }
 
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
 
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (formData.phone) {
        const phoneRegex = /^[0-9]{10}$/;

        if(!phoneRegex.test(formData.phone)) {
            setError('Phone number must contain 10 digits.');
            return;
        }
    }
 
    setLoading(true)
 
    try {
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:     formData.name,
          email:    formData.email,
          password: formData.password,
          phone:    formData.phone,
          address:  formData.address,
        }),
      })
 
      const data = await response.json()
 
      if (!response.ok) {
        setError(data.error || 'Registration failed. Please try again.')
        return
      }
 
      setSuccess(true)
      setTimeout(() => navigate('/login'), 2000)
 
    } catch (err) {
      setError('Could not connect to server. Please try again later.')
    } finally {
      setLoading(false)
    }
  }
 
  return (
    <div className="register-page">
      <div className="register-card">
 
        {/* Header */}
        <div className="register-header">
          <p className="register-diamonds">✦ ✦ ✦</p>
          <h1 className="register-title">Create Account</h1>
          <p className="register-subtitle">Join Golden Hope and start shopping</p>
        </div>
 
        {/* Success message */}
        {success && (
          <div className="register-alert register-alert--success">
            Account created! Redirecting to login...
          </div>
        )}
 
        {/* Error message */}
        {error && (
          <div className="register-alert register-alert--error">
            {error}
          </div>
        )}
 
        {/* Form */}
        <form onSubmit={handleSubmit} className="register-form">
 
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="form-input"
            />
          </div>
 
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="form-input"
            />
          </div>
 
          <div className="form-group">
            <label className="form-label">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              className="form-input"
            />
          </div>
 
          <div className="form-group">
            <label className="form-label">Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="form-input"
            />
          </div>
 
          <div className="form-group">
            <label className="form-label">
              Phone <span className="form-label--optional">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="form-input"
            />
          </div>
 
          <div className="form-group">
            <label className="form-label">
              Address <span className="form-label--optional">(optional)</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your shipping address"
              rows={3}
              className="form-input form-textarea"
            />
          </div>
 
          <button
            type="submit"
            disabled={loading}
            className={`register-btn ${loading ? 'register-btn--loading' : ''}`}
          >
            {loading ? 'Creating Account...' : 'CREATE ACCOUNT'}
          </button>
        </form>
 
        {/* Login link */}
        <p className="register-login-link">
          Already have an account?{' '}
          <Link to="/login" className="register-link">Log in</Link>
        </p>
 
      </div>
    </div>
  )
}
 