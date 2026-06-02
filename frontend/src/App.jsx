import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentCancel from './pages/PaymentCancel'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App