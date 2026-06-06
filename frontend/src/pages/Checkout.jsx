import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import PayPalButton from "../components/PayPalButton";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const handleSuccess = (details) => {
    console.log("Payment completed:", details);
    navigate("/success");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <button className="checkout-back" onClick={() => navigate('/cart')}>
          ← Back to Cart
        </button>
        <h1 className="checkout-title">✦ Checkout ✦</h1>
        <p className="checkout-sub">Complete your purchase securely</p>

      <PayPalScriptProvider
        options={{
          "client-id": "AQ-hnxECuXl7_smsE3wMqOTRLi45r57okLnHwUF8tIK5Uj5txZ3_AaBkm3SUROmHaxAHQ8mFL3f2hvzX",
        }}
      >
        <PayPalButton
          amount={100}
          onSuccess={handleSuccess}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Checkout;