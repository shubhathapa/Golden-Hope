function PaymentSuccess() {
  return (
    <div>
      <h1>✅ Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <p>Your order has been received and is being processed.</p>

      <button onClick={() => window.location.href = "/products"}>
        Continue Shopping
      </button>
    </div>
  );
}

export default PaymentSuccess;