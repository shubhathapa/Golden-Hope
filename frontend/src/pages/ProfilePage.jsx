import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProfilePage.css'

const API_URL = 'https://golden-hope-1.onrender.com'

export default function ProfilePage() {
  const navigate = useNavigate()

  const [user, setUser]         = useState(null)
  const [loading, setLoading]   = useState(true)
  const [editing, setEditing]   = useState(false)
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState('')

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  })

  //use when authentication is set
  /*useEffect(() => {
    const token = localStorage.getItem('token')

    // No token = not logged in, redirect to login
    if (!token) {
      navigate('/login')
      return
    }

    fetch(`${API_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          // Token expired or invalid
          localStorage.removeItem('token')
          navigate('/login')
          return null
        }
        return res.json()
      })
      .then(data => {
        if (!data) return
        setUser(data.user)
        setFormData({
          name:    data.user.name    || '',
          phone:   data.user.phone   || '',
          address: data.user.address || '',
        })
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load profile. Please try again.')
        setLoading(false)
      })
  }, [navigate])*/

  useEffect(() => {
  // TEMP: fake user data for testing — remove this later
  const fakeUser = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 (212) 555-0198',
    address: '123 Golden Avenue, New York, NY 10001',
  }
  setUser(fakeUser)
  setFormData({
    name: fakeUser.name,
    phone: fakeUser.phone,
    address: fakeUser.address,
  })
  setLoading(false)
}, [navigate])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
    setSuccess('')
  }

  async function handleSave(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.name) {
      setError('Name cannot be empty.')
      return
    }

    setSaving(true)
    const token = localStorage.getItem('token')

    try {
      const response = await fetch(`${API_URL}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Update failed. Please try again.')
        return
      }

      setUser(data.user)
      setSuccess('Profile updated successfully!')
      setEditing(false)
    } catch {
      setError('Could not connect to server. Please try again later.')
    } finally {
      setSaving(false)
    }
  }

  function handleCancel() {
    // Reset form back to current user data
    setFormData({
      name:    user.name    || '',
      phone:   user.phone   || '',
      address: user.address || '',
    })
    setError('')
    setSuccess('')
    setEditing(false)
  }

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  //Loading state
  if (loading) {
    return (
      <div className="profile-loading">
        <p>Loading your profile...</p>
      </div>
    )
  }

  //Page 
  return (
    <div className="profile-page">

      {/* ── Page Header ── */}
      <div className="profile-hero">
        <p className="profile-diamonds">✦ ✦ ✦</p>
        <h1 className="profile-title">My Profile</h1>
        <p className="profile-subtitle">Manage your account information</p>
      </div>

      <div className="profile-container">
        <div className="profile-card">

          {/* ── Avatar + name ── */}
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="profile-name">{user?.name}</h2>
              <p className="profile-email">{user?.email}</p>
            </div>
          </div>

          <div className="profile-divider" />

          {/* ── Alerts ── */}
          {success && (
            <div className="profile-alert profile-alert--success">{success}</div>
          )}
          {error && (
            <div className="profile-alert profile-alert--error">{error}</div>
          )}

          {/* ── View mode ── */}
          {!editing ? (
            <div className="profile-info">

              <div className="profile-field">
                <span className="field-label">Full Name</span>
                <span className="field-value">{user?.name || '—'}</span>
              </div>

              <div className="profile-field">
                <span className="field-label">Email Address</span>
                <span className="field-value">{user?.email || '—'}</span>
              </div>

              <div className="profile-field">
                <span className="field-label">Phone</span>
                <span className="field-value">{user?.phone || 'Not provided'}</span>
              </div>

              <div className="profile-field">
                <span className="field-label">Address</span>
                <span className="field-value">{user?.address || 'Not provided'}</span>
              </div>

              <div className="profile-actions">
                <button className="profile-btn profile-btn--primary" onClick={() => setEditing(true)}>
                  Edit Profile
                </button>
              </div>
            </div>

          ) : (
            /* ── Edit mode ── */
            <form onSubmit={handleSave} className="profile-form">

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

              {/* Email is read-only — can't change email */}
              <div className="form-group">
                <label className="form-label">
                  Email Address
                  <span className="form-label--note"> (cannot be changed)</span>
                </label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="form-input form-input--disabled"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone</label>
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
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your shipping address"
                  rows={3}
                  className="form-input form-textarea"
                />
              </div>

              <div className="profile-actions">
                <button
                  type="submit"
                  disabled={saving}
                  className={`profile-btn profile-btn--primary ${saving ? 'profile-btn--loading' : ''}`}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  className="profile-btn profile-btn--cancel"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  )
}
