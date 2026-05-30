const sequelize = require('./index')
const Product = require('../models/Product')

const products = [
  { name: 'Handwoven Lucky Bracelet', description: 'Traditional Chinese red rope bracelet with gold alluvial beads, handwoven for good fortune', price: 9.99, imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400', inventoryQty: 50, rating: 4.9 },
  { name: 'Jade Pendant Necklace', description: 'Natural jade carved pendant on silk cord, traditional Chinese blessing symbol', price: 14.99, imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400', inventoryQty: 30, rating: 4.8 },
  { name: 'Butterfly Hair Pin', description: 'Handmade cloisonné enamel butterfly hairpin, inspired by Tang Dynasty style', price: 11.99, imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400', inventoryQty: 40, rating: 4.7 },
  { name: 'Cloisonné Earrings', description: 'Traditional cloisonné enamel drop earrings with floral pattern, handcrafted in Beijing', price: 12.99, imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400', inventoryQty: 35, rating: 4.6 },
  { name: 'Red String Knot Bracelet', description: 'Hand-tied Chinese knot bracelet with jade bead, symbol of prosperity and protection', price: 7.99, imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400', inventoryQty: 60, rating: 4.9 },
  { name: 'Silver Hair Stick', description: 'Sterling silver hair stick with hand-engraved plum blossom, traditional Hanfu accessory', price: 15.99, imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400', inventoryQty: 25, rating: 4.8 },
  { name: 'Silk Tassel Earrings', description: 'Handmade silk tassel earrings with gold copper ring, elegant Chinese folk style', price: 8.99, imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400', inventoryQty: 45, rating: 4.7 },
  { name: 'Peony Enamel Ring', description: 'Hand-painted peony enamel ring in vintage copper setting, Chinese floral art', price: 13.99, imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400', inventoryQty: 20, rating: 4.6 },
  { name: 'Bamboo Jade Bangle', description: 'Carved natural jade bangle with bamboo pattern, symbol of strength and resilience', price: 19.99, imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400', inventoryQty: 15, rating: 4.8 },
  { name: 'Phoenix Hair Crown', description: 'Handcrafted phoenix hair crown with filigree metalwork, inspired by Ming Dynasty style', price: 24.99, imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400', inventoryQty: 10, rating: 4.9 },
]

async function seed() {
  await sequelize.sync({ alter: true })
  await Product.bulkCreate(products)
  console.log('✅ Seeded 10 products!')
  process.exit(0)
}

seed()