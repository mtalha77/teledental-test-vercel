import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CancelButton from "../../../shared/CancelButton";
import { useAppointmentBookingContext } from "../../../Context/useAppointmentBookingContext";
import Logo from "../../../shared/Logo";

// Define schema for validation
const schema = z.object({
  paymentMethod: z.string().min(1, "Please select a payment method"),
  termsCheck: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

const PaymentStep = () => {
  const { nextStep, prevStep } = useAppointmentBookingContext();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      paymentMethod: "card",
      termsCheck: true,
    },
  });

  const watchPaymentMethod = watch("paymentMethod");

  const onSubmit = () => {
    nextStep();
  };

  return (
    <div className="container" style={{ maxWidth: "1000px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-7 pe-md-4">
            <img src="/images/logo-with-text.png" alt="Payment Step" />
            <div
              className="d-flex flex-column align-items-end"
              style={{
                marginTop: "-1.5rem",
                marginRight: "5rem",
              }}
            >
              <p className="payment_heading" style={{ color: "#F7A5F9" }}>
                Teledental.com
              </p>
              <p
                className="payment_heading"
                style={{
                  marginTop: "-.6rem",
                }}
              >
                DentalChat.com
              </p>
            </div>
            <h4 className="mb-4 text_blue">Hi User,</h4>
            <h5 className="mb-3">Payment:</h5>

            <div className="mb-3 border rounded p-3">
              <div className="form-check d-flex align-items-center justify-content-between">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="card"
                    value="card"
                    {...register("paymentMethod")}
                    checked={watchPaymentMethod === "card"}
                  />
                  <label className="form-check-label ms-2" htmlFor="card">
                    Card
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 border rounded p-3">
              <div className="form-check d-flex align-items-center justify-content-between">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="paypal"
                    value="paypal"
                    {...register("paymentMethod")}
                  />
                  <label className="form-check-label ms-2" htmlFor="paypal">
                    Paypal
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-5 border rounded p-3">
              <div className="form-check d-flex align-items-center justify-content-between">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="applepay"
                    value="applepay"
                    {...register("paymentMethod")}
                  />
                  <label className="form-check-label ms-2" htmlFor="applepay">
                    Apple Pay
                  </label>
                </div>
              </div>
            </div>

            {errors.paymentMethod && (
              <div className="text-danger mb-3">
                {errors.paymentMethod.message}
              </div>
            )}

            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className={`form-check-input ${
                  errors.termsCheck ? "is-invalid" : ""
                }`}
                id="termsCheck"
                {...register("termsCheck")}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                You acknowledge requesting a 10 minute or less dental
                consultation with a dentist for a fee of $50. You understand
                there are no refunds. You agree to our terms and conditions, and
                privacy policy
              </label>
              {errors.termsCheck && (
                <div className="invalid-feedback">
                  {errors.termsCheck.message}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-between">
              <CancelButton />
              <div>
                <button
                  type="button"
                  className="btn back_btn text-primary me-2"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button type="submit" className="btn btn_blue px-4">
                  Finish Booking
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-md-5 p-4 rounded text_blue d-flex flex-column justify-content-center"
            style={{ backgroundColor: "#0071BC33" }}
          >
            <h4 className="mb-4 text_blue">Here is your order summary:</h4>
            <div className="d-flex justify-content-between mb-2">
              <div> 10 min video consultation:</div>
              <div className="fw-bold">$50</div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <div>
                Tax: <span className="text-danger">TAX???</span>
              </div>
              <div className="fw-bold">$6</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <div className="fw-bold">Total:</div>
              <div className="fw-bold">$56</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentStep;
