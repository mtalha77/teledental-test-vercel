import React from "react";
import { useAppointmentBookingContext } from "../Context/useAppointmentBookingContext";

const CancelButton = () => {
  const { goToStep } = useAppointmentBookingContext();

  return (
    <button
      className="btn cancel_btn border-0"
      onClick={() => goToStep(1)}
      type="button"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
