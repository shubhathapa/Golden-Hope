import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import ProductFeed from "./ProductFeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductFeed />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;