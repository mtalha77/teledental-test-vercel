import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ProgressBar from "../../../shared/ProgressBar";
import CancelButton from "../../../shared/CancelButton";
import { useAppointmentBookingContext } from "../../../Context/useAppointmentBookingContext";
import { useUserContext } from "../../../Context/userContext";
import { useHistory } from "react-router";
import { serialize } from "object-to-formdata";
import { createRequest } from "../../../Patient/apis/patientV1";

// Define schema for validation
const schema = z.object({
  appointmentTime: z.string().min(1, "Please select a time preference"),
});

const AppointmentStep = () => {
  const { nextStep, prevStep, updateFormData, formData, resetBookingForm } =
    useAppointmentBookingContext();
  const { user, refetch } = useUserContext();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      appointmentTime: formData.appointmentTime || "asap",
    },
  });

  const watchAppointmentTime = watch("appointmentTime");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      updateFormData(data);

      // Prepare data from all steps for submission
      const appointmentData = {
        // Map form data to API expected format
        title: formData.summary || formData.dentalIssue.substring(0, 50),
        description: formData.dentalIssue,
        type: [
          formData.consultationDuration === "10min"
            ? "15-min Video consultation"
            : formData.consultationDuration === "30min"
            ? "30-min Video consultation"
            : "60-min Video consultation",
        ],
        painLevel: formData.painLevel,
        isEmergency: formData.hasEmergency === "yes",
        lastCleaning: formData.lastCleaning,
        lastVisit: formData.lastVisit,
        lastDentalXRay: formData.lastXrays,
        dentalInsurance: formData.dentalInsurance === "yes",
        appointmentTime: data.appointmentTime,
      };

      // Create form data for submission
      const formDataToSubmit = serialize(appointmentData);

      // Add images if they exist
      if (formData.photos && formData.photos.length > 0) {
        formData.photos.forEach((file) => {
          formDataToSubmit.append("images", file, file.name);
        });
      }

      // Submit the request
      await createRequest({ body: formDataToSubmit });
      setLoading(false);
      resetBookingForm();
      history.push("/patients/messages");
    } catch (error) {
      setLoading(false);
      setError(error.errMsg || "Failed to create appointment request");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar step={3} />
        <div className="row mb-4">
          <div className="col">
            <h3 className="top_heading">Schedule An Appointment</h3>
            <p className="subtitle text-md-start">
              Find the time that matches with your schedule.
            </p>
          </div>
        </div>

        <h4 className="mb-3 heading_title">Preferred Consultation Time</h4>

        <div className="mb-4 btn-group group_btn w-100">
          <input type="hidden" {...register("appointmentTime")} />
          <div className="btn-group w-100">
            <button
              type="button"
              className={`btn ${
                watchAppointmentTime === "asap"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("appointmentTime", "asap", { shouldValidate: true })
              }
            >
              As soon as possible
            </button>
            <button
              type="button"
              className={`btn ${
                watchAppointmentTime === "specific"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("appointmentTime", "specific", {
                  shouldValidate: true,
                })
              }
            >
              Specific time/day
            </button>
          </div>
          {errors.appointmentTime && (
            <div className="text-danger mt-2">
              {errors.appointmentTime.message}
            </div>
          )}
        </div>

        {watchAppointmentTime === "specific" && (
          <div className="mb-4">
            <label className="mb-2 heading_title">Select a Date and Time</label>
            <div className="row">
              <div className="col-md-6 mb-3 p-0">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select Date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="col-md-6">
                <select className="form-select py-2">
                  <option value="" disabled>
                    Select Time
                  </option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <hr className="my-4" />

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="d-flex justify-content-between">
          <CancelButton />
          <div>
            <button
              type="button"
              className="btn back_btn me-2"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn_blue px-4"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentStep;
