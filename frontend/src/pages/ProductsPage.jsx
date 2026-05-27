import ProductCard from '../components/ProductCard';
import './ProductsPage.css';
const mockProducts = [
  {
    _id: '1',
    name: 'Handwoven Lucky Bracelet',
    description: 'Traditional Chinese red rope bracelet with gold alluvial beads, handwoven for good fortune',
    price: 9.99,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
  },
  {
    _id: '2',
    name: 'Jade Pendant Necklace',
    description: 'Natural jade carved pendant on silk cord, traditional Chinese blessing symbol',
    price: 14.99,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400',
  },
  {
    _id: '3',
    name: 'Butterfly Hair Pin',
    description: 'Handmade cloisonné enamel butterfly hairpin, inspired by Tang Dynasty style',
    price: 11.99,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
  },
  {
    _id: '4',
    name: 'Cloisonné Earrings',
    description: 'Traditional cloisonné enamel drop earrings with floral pattern, handcrafted in Beijing',
    price: 12.99,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400',
  },
  {
    _id: '5',
    name: 'Red String Knot Bracelet',
    description: 'Hand-tied Chinese knot bracelet with jade bead, symbol of prosperity and protection',
    price: 7.99,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
  },
  {
    _id: '6',
    name: 'Silver Hair Stick',
    description: 'Sterling silver hair stick with hand-engraved plum blossom, traditional Hanfu accessory',
    price: 15.99,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
  },
  {
    _id: '7',
    name: 'Silk Tassel Earrings',
    description: 'Handmade silk tassel earrings with gold copper ring, elegant Chinese folk style',
    price: 8.99,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400',
  },
  {
    _id: '8',
    name: 'Peony Enamel Ring',
    description: 'Hand-painted peony enamel ring in vintage copper setting, Chinese floral art',
    price: 13.99,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
  },
  {
    _id: '9',
    name: 'Bamboo Jade Bangle',
    description: 'Carved natural jade bangle with bamboo pattern, symbol of strength and resilience',
    price: 19.99,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400',
  },
  {
    _id: '10',
    name: 'Phoenix Hair Crown',
    description: 'Handcrafted phoenix hair crown with filigree metalwork, inspired by Ming Dynasty style',
    price: 24.99,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
  },
];


function ProductsPage() {
  return (
    <div className="products-page">
      <h1 className="store-title">✦ GOLDEN HOPE ✦</h1>
      <div className="products-grid">
        {mockProducts.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;