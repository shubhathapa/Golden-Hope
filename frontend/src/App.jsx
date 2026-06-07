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
import ProtectedRoute from './components/ProtectedRoute'
import Login from "./pages/Login";    //m
import './App.css';
import ContactPage from "./pages/ContactPage";  //m

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </>
  )
}

export default App