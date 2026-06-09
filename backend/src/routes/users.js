// backend/src/routes/users.js
// Handles: register, login, get profile, update profile

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')       // for hashing passwords
const jwt = require('jsonwebtoken')    // for login tokens
const User = require('../models/User')

// ── Helper: verify the login token sent by the frontend ──────────────────────
// The frontend must send: Authorization: Bearer <token>
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Login required' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' })
    req.user = user   // attach user info to the request
    next()
  })
}

// ── POST /api/users/register ──────────────────────────────────────────────────
// Body: { name, email, password, phone?, address? }
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body

    // Check all required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' })
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' })
    }

    // Hash the password before saving (never store plain text passwords)
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    })

    // Return the new user (without the password)
    res.status(201).json({
      message: 'Account created successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    })
  } catch (err) {
    console.error('Register error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// ── POST /api/users/login ─────────────────────────────────────────────────────
// Body: { email, password }
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    // Compare the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    // Create a token the frontend will use for future requests
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }   // token lasts 7 days
    )

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    })
  } catch (err) {
    console.error('Login error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// ── GET /api/users/profile ────────────────────────────────────────────────────
// Requires: Authorization header with token from login
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }  // never send password back
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ user })
  } catch (err) {
    console.error('Get profile error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// ── PUT /api/users/profile ────────────────────────────────────────────────────
// Requires: Authorization header with token from login
// Body: { name?, phone?, address? }  — all optional, only update what's sent
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name, phone, address } = req.body

    const user = await User.findByPk(req.user.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Only update fields that were actually sent
    if (name)    user.name    = name
    if (phone)   user.phone   = phone
    if (address) user.address = address

    await user.save()

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    })
  } catch (err) {
    console.error('Update profile error:', err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

module.exports = router