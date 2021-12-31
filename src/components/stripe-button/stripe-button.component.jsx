import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KCkDYSGsRgIybssiioqLHnWr0Miv72EdQnzoYGRdwwN3eonhLSGNAsBQIhVdazifRY4q7S2jNggdX5vJBUfqDZ200p2FsWDNb';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  } 
  return (
    <StripeCheckout 
      currency="USD"
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='../../assets/crown.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;