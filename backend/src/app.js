const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const productRoutes = require('./routes/products')

const app = express()

app.use(cors({
  origin: ['http://localhost:5173', 'https://golden-hope-1.onrender.co m']
}))
app.use(express.json())

const cartRoutes = require('./routes/cart') 
const userRoutes = require('./routes/users')
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)  

const PORT = process.env.PORT || 3000

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(err => console.error('Database connection error:', err))

module.exports = app