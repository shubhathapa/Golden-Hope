const sequelize = require('./index')
const Product = require('../models/Product')

const products = [
  { 
    name: 'Chinese Pearl Lily Hair Stick', 
    description: 'Delicate hairpin adorned with pearl lily blossoms and flowing tassels. A timeless piece that pairs beautifully with hanfu, qipao, or any modern oriental look.', 
    price: 9.99, 
    imageUrl: '/images/Chinese-Pearl-Lily-Hair-Stick.jpg', 
    inventoryQty: 50, 
    rating: 4.9 
  },
  { 
    name: 'Blue Blossom Tassel Hair Clip', 
    description: 'A charming blue floral clip with soft dangling tassels, drawing inspiration from modern Chinese fashion. Ideal for festivals, vacations, and everyday elegance.', 
    price: 8.99, 
    imageUrl: '/images/Blue-Blossom-Tassel-Hair-Clip.jpg', 
    inventoryQty: 45, 
    rating: 4.7 
  },
  { 
    name: 'Jade Dream Chinese Earrings', 
    description: 'Graceful earrings rooted in classical oriental design. Their subtle jade tones and refined silhouette make them a natural match for hanfu and new-Chinese fashion.', 
    price: 11.99, 
    imageUrl: '/images/Jade-Dream-Chinese-Earrings.jpg', 
    inventoryQty: 40, 
    rating: 4.8 
  },
  { 
    name: 'Elegant Chinese Cloisonné Bangle', 
    description: 'Handcrafted cloisonné bangle with intricate floral patterns inspired by imperial palace art. A stunning gift choice for weddings, hanfu, or qipao occasions.', 
    price: 19.99, 
    imageUrl: '/images/Elegant-Chinese-Cloisonne-Bangle.jpg', 
    inventoryQty: 25, 
    rating: 4.9 
  },
  { 
    name: 'Vintage Chinese Lace Choker', 
    description: 'A romantic lace choker with a retro Chinese twist. Its delicate texture and close-fitting silhouette add a touch of vintage charm to qipao and modern outfits alike.', 
    price: 12.99, 
    imageUrl: '/images/Vintage-Chinese-Lace-Choker.jpg', 
    inventoryQty: 35, 
    rating: 4.6 
  },
  { 
    name: 'Butterfly Meadow Beaded Bracelet', 
    description: 'A softly layered beaded bracelet with a vintage oriental feel. Light and versatile, it complements both casual hanfu styling and everyday outfits effortlessly.', 
    price: 7.99, 
    imageUrl: '/images/Butterfly-Meadow-Beaded-Bracelet.jpg', 
    inventoryQty: 60, 
    rating: 4.7 
  },
  { 
    name: 'Oriental Cloud Ring & Necklace Set', 
    description: 'A coordinated jewelry set inspired by ancient cloud motifs and jade culture. Each piece carries a sense of myth and elegance, perfect for hanfu and qipao styling.', 
    price: 14.99, 
    imageUrl: '/images/Oriental-Cloud-Ring-Necklace-Set.jpg', 
    inventoryQty: 20, 
    rating: 4.8 
  },
  { 
    name: 'Vintage Jade Tassel Earrings', 
    description: 'Statement earrings combining jade-inspired stones, colorful enamel, and graceful tassels. A bold yet refined choice for vintage oriental and hanfu fashion lovers.', 
    price: 13.99, 
    imageUrl: '/images/Vintage-Jade-Tassel-Earrings.jpg', 
    inventoryQty: 30, 
    rating: 4.6 
  },
  { 
    name: 'Vintage Tassel Hair Claw Clip', 
    description: 'A practical yet stylish hair claw clip dressed up with flowing tassels and Chinese-inspired details. Comfortable enough for daily wear, elegant enough for special occasions.', 
    price: 10.99, 
    imageUrl: '/images/Vintage-Tassel-Hair-Claw-Clip.jpg', 
    inventoryQty: 40, 
    rating: 4.8 
  },
  { 
    name: 'Luo Yue Pearl Pendant Necklace', 
    description: 'A graceful pearl pendant necklace echoing the romantic aesthetics of the Tang dynasty. Pairs effortlessly with hanfu, qipao, or any outfit calling for a touch of poetic elegance.', 
    price: 15.99, 
    imageUrl: '/images/Luo-Yue-Pearl-Pendant-Necklace.jpg', 
    inventoryQty: 25, 
    rating: 4.9 
  },
]

async function seed() {
  await sequelize.sync({ alter: true })
  await Product.destroy({ where: {} }) 
  await Product.bulkCreate(products)
  console.log('✅ Seeded 10 products!')
  process.exit(0)
}

seed()