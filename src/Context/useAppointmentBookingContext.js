import React, { createContext, useContext, useState } from "react";

const appointmentBookingContext = createContext(null);

export const AppointmentBookingProvider = ({
  children,
  initialStep,
  setCurrentStep,
}) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    setStep(step + 1);
    setCurrentStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
    setCurrentStep(step - 1);
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
    setCurrentStep(stepNumber);
  };

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    acceptTerms: false,
    dentalInsurance: "",
    lastCleaning: "",
    lastVisit: "",
    lastXrays: "",
    painLevel: "medium",
    hasEmergency: "no",
    dentalIssue: "",
    summary: "",
    appointmentTime: '',
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <appointmentBookingContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        goToStep,
        formData,
        updateFormData,
      }}
    >
      {children}
    </appointmentBookingContext.Provider>
  );
};

export const useAppointmentBookingContext = () => {
  const context = useContext(appointmentBookingContext);
  if (!context) {
    throw new Error(
      "useAppointmentBookingContext must be used within a AppointmentBookingProvider"
    );
  }
  return context;
};
