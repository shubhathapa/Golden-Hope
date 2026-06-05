const express = require('express')
const router = express.Router()
const CartItem = require('../models/CartItem')
const Product = require('../models/Product')

// GET /api/cart
router.get('/', async (req, res) => {
  try {
    const items = await CartItem.findAll({ include: Product, 
        order: [['createdAt', 'ASC']]
    })
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
// POST /api/cart
router.post('/', async (req, res) => {
  try {
    const { productId } = req.body
    const existing = await CartItem.findOne({ where: { productId } })
    if (existing) {
      existing.quantity += 1
      await existing.save()
      return res.json(existing)
    }
    const item = await CartItem.create({ productId, quantity: 1 })
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const item = await CartItem.findByPk(req.params.id)
    if (!item) return res.status(404).json({ error: 'Not found' })
    item.quantity = req.body.quantity
    await item.save()
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE /api/cart/:id
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.destroy({ where: { id: req.params.id } })
    res.json({ message: 'Removed' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router