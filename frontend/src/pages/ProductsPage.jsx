import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import './ProductsPage.css'
import Navbar from '../components/navbar'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://golden-hope.onrender.com/api/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
  return (
    <>
      <Navbar />
      <p>Loading...</p>
    </>
  )
}

  return (
    <div className="products-page">
      <h1 className="store-title">✦ GOLDEN HOPE ✦</h1>
      <div className="products-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage