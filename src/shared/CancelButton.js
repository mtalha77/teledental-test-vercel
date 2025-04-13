import React, { useState } from "react";
import { useAppointmentBookingContext } from "../Context/useAppointmentBookingContext";
import CancelConfirmationPopup from "./CancelConfirmationPopup";
import { useHistory } from "react-router-dom";

const CancelButton = ({ onCancelComplete }) => {
  const { goToStep } = useAppointmentBookingContext();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const history = useHistory();

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleClosePopup = () => {
    setShowConfirmation(false);
  };

  const handleConfirmCancel = () => {
    setShowConfirmation(false);
    if (onCancelComplete) {
      onCancelComplete();
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <button
        className="btn cancel_btn border-0"
        onClick={handleCancelClick}
        type="button"
      >
        Cancel
      </button>
      <CancelConfirmationPopup
        isOpen={showConfirmation}
        onClose={handleClosePopup}
        onConfirm={handleConfirmCancel}
      />
    </>
  );
};

export default CancelButton;
