import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, message, Spin } from "antd";
import * as React from "react";
import { useUserContext } from "../Context/userContext";
import { setupIntent, videoConsult } from "../Patient/apis/patientV1";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const PaymentForm = ({
  confirmHandler,
  refetchOnCompletion = true,
  disableButton = false,
  activeChatId
}) => {
  const [paymentMethodAdded, setPaymentMethodAdded] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = React.useState(false);
  const { refetchPaymentInfo, user } = useUserContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      var setupIntentRes = await videoConsult(activeChatId);
    } catch (err) {
      message.error(err.errMsg);
      setIsLoading(false);
    }

    // if (!stripe || !elements) {
    //   // Stripe.js has not yet loaded.
    //   // Make sure to disable form submission until Stripe.js has loaded.
    //  return;
    // }
    // setIsLoading(true);
    // try {
    //   var setupIntentRes = await setupIntent();
    // } catch (err) {
    //   message.error(err.errMsg);
    //   setIsLoading(false);
    // }
    // if (!setupIntentRes) {
    //   return;
    // }
    // const result = await stripe.confirmCardSetup(
    //   setupIntentRes.data.client_secret,
    //   {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //       billing_details: {
    //         name: user?.firstName + " " + user?.lastName,
    //       },
    //     },
    //   }
    // );

    // setIsLoading(false);
    // if (result.error) {
    //   // Show error to your customer
    //   message.error(result.error.message);
    // } else {
    //   setPaymentMethodAdded(true);
    //   message.success("Your payment method has been set up successfully");
    //   confirmHandler();
    // }
    confirmHandler();
  };

  React.useEffect(() => {
    if (paymentMethodAdded && refetchOnCompletion) {
      var interval = setInterval(() => {
        refetchPaymentInfo();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [paymentMethodAdded]);

  return (
    <Spin spinning={paymentMethodAdded}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ minWidth: "400px" }}>
          {/* <FormControl label="Card details" htmlFor="cardDetails"> */}
          <CardElement options={CARD_ELEMENT_OPTIONS} />
          {/* </FormControl> */}
          <Button
            className="confirm-btn"
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%", marginTop: "20px" }}
            loading={isLoading}
            disabled={disableButton}
            onClick={handleSubmit}
          >
            CONFIRM-Payment
          </Button>
        </div>
      </div>
    </Spin>
  );
};

export default PaymentForm;
