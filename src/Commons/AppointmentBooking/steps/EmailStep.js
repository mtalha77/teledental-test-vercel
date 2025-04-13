import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAppointmentBookingContext } from "../../../Context/useAppointmentBookingContext";
import Logo from "../../../shared/Logo";
import CancelButton from "../../../shared/CancelButton";
import { ArrowLeft } from "lucide-react";
import { useHistory } from "react-router-dom";

// Define schema for validation
const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const EmailStep = () => {
  const { nextStep, updateFormData, formData, resetBookingForm } =
    useAppointmentBookingContext();
  const history = useHistory();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: formData.email,
    },
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  const handleBack = () => {
    resetBookingForm();
    history.push("/");
  };

  return (
    <div className="text-center">
      <div className="position-absolute top-0 start-0 m-3">
        <button
          className="btn border-0 p-2"
          onClick={handleBack}
          type="button"
          aria-label="Go back"
        >
          <ArrowLeft size={22} />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="px-3 px-md-0">
        <Logo both={true} />
        <h3 className="subtitle mb-2 px-2">
          Let's get your appointment set up. Enter your email below.
        </h3>
        <div className="mb-4 mt-4 mx-auto" style={{ maxWidth: "500px" }}>
          <input
            type="email"
            className={`form-control form-control-lg ${
              errors.email ? "is-invalid" : ""
            }`}
            placeholder="Email *"
            {...register("email")}
          />
          {errors.email && (
            <div className="invalid-feedback text-start">
              {errors.email.message}
            </div>
          )}
        </div>
        <div
          className="d-flex justify-content-between mt-5 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <CancelButton onCancelComplete={handleBack} />
          <button type="submit" className="btn btn_blue px-4">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailStep;
