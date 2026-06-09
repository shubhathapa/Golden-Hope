import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './OrdersPage.css'

// TEMP fake orders for testing — replace with real API call later
const FAKE_ORDERS = [
  {
    id: 'ORD-1001',
    date: '2024-05-10',
    total: 34.97,
    items: [
      { name: 'Handwoven Lucky Bracelet', quantity: 2, price: 9.99 },
      { name: 'Jade Pendant Necklace',    quantity: 1, price: 14.99 },
    ],
  },
  {
    id: 'ORD-1002',
    date: '2024-06-02',
    total: 11.99,
    items: [
      { name: 'Butterfly Hair Pin', quantity: 1, price: 11.99 },
    ],
  },
]

export default function OrdersPage() {
  const navigate = useNavigate()
  const [orders, setOrders]   = useState([])
  const [loading, setLoading] = useState(true)

  /*useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }

    // TODO: replace with real API call to get orders
    // fetch(`${API_URL}/api/orders`, { headers: { Authorization: `Bearer ${token}` } })
    setTimeout(() => {
      setOrders(FAKE_ORDERS)
      setLoading(false)
    }, 500)
  }, [navigate])*/

  useEffect(() => {
  // TEMP: skip login check for testing — add back later
  setOrders(FAKE_ORDERS)
  setLoading(false)
}, [navigate])

  if (loading) {
    return <div className="orders-loading"><p>Loading your orders...</p></div>
  }

  return (
    <div className="orders-page">

      <div className="orders-hero">
        <p className="orders-diamonds">✦ ✦ ✦</p>
        <h1 className="orders-title">My Orders</h1>
        <p className="orders-subtitle">Your Golden Hope purchase history</p>
      </div>

      <div className="orders-container">

        {orders.length === 0 ? (
          <div className="orders-empty">
            <p className="orders-empty-text">You haven't placed any orders yet.</p>
            <button className="orders-shop-btn" onClick={() => navigate('/products')}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">

                {/* Order header */}
                <div className="order-header">
                  <div>
                    <p className="order-id">Order {order.id}</p>
                    <p className="order-date">
                      Placed on {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </p>
                  </div>
                  <p className="order-total">${order.total.toFixed(2)}</p>
                </div>

                <div className="order-divider" />

                {/* Items list */}
                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="order-item-dot" />
                      <div className="order-item-info">
                        <span className="order-item-name">{item.name}</span>
                        <span className="order-item-qty">x{item.quantity}</span>
                      </div>
                      <span className="order-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
