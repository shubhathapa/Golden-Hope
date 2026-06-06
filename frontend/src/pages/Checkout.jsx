import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import PayPalButton from "../components/PayPalButton";

function Checkout() {
  const navigate = useNavigate();

  const handleSuccess = (details) => {
    console.log("Payment completed:", details);

    // Later you can save the order to MongoDB here

    navigate("/success");
  };

  return (
    <div>
      <h1>Checkout</h1>

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