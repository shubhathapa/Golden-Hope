import { Routes, Route, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentCancel from './pages/PaymentCancel'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import Navbar from "./components/navbar"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './App.css'
import Login from "./pages/Login";    //m

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/login" element={<h1>LOGIN PAGE</h1>} />
      </Routes>
    </>
  )
}

export default App