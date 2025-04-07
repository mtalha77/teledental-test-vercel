import React from "react";
import { useAppointmentBookingContext } from "../../../Context/useAppointmentBookingContext";
import ProgressBar from "../../../shared/ProgressBar";

const ConfirmationStep = () => {
  const { goToStep } = useAppointmentBookingContext();

  return (
    <div className="container text-center" style={{ maxWidth: "600px" }}>
      <div className="my-5 py-5">
        <ProgressBar step={5} />

        <p className="text_blue text-start mb-4">
          We will get back to you shortly.
        </p>
        <div className="mb-4 text-start">
          <h3 className=" text_blue">
            Let us get a dentist in your area to confirm the appointment.
          </h3>
          <h3 className="mt-4 text_blue">Thank you.</h3>
        </div>
        <p className="mb-5 text-start">
          Please check email/phone number to view more details.
        </p>
        <button
          type="button"
          className="btn btn_blue px-5 py-2"
          onClick={() => goToStep(1)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
