import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({
  amount = 0,
  onSuccess = () => {},
}) {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        console.log("Payment success:", details);

        onSuccess(details);
      }}
    />
  );
}