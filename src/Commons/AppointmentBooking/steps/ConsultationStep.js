import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown } from "lucide-react";
import { useAppointmentBookingContext } from "../../../Context/useAppointmentBookingContext";
import CancelButton from "../../../shared/CancelButton";
import ProgressBar from "../../../shared/ProgressBar";

// Define schema for validation
const schema = z.object({
  summary: z.string().optional(),
  painLevel: z.string().min(1, "Please select a pain level"),
  hasEmergency: z.string().min(1, "Please indicate if this is an emergency"),
  dentalIssue: z.string().min(1, "Please describe your dental issue"),
});

const ConsultationStep = () => {
  const { nextStep, prevStep, updateFormData, formData } =
    useAppointmentBookingContext();

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
      summary: formData.summary,
      painLevel: formData.painLevel || "medium",
      hasEmergency: formData.hasEmergency || "no",
      dentalIssue: formData.dentalIssue,
    },
  });

  const watchPainLevel = watch("painLevel");
  const watchHasEmergency = watch("hasEmergency");

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProgressBar step={1} />
        <div className="row mb-4">
          <div className="col">
            <h4 className="text-start top_heading mb-0">Reason for Consultation</h4>
            <p className="text-start subtitle">
              Answer a few quick questions for your visit.
            </p>
          </div>
          <div className="col-auto">
            <h4 className="top_heading">Hello User</h4>
          </div>
        </div>

        <div className="mb-3">
          <label className="mb-2 heading_title">What do you need help with?</label>
          <textarea
            className={`form-control ${errors.summary ? "is-invalid" : ""}`}
            placeholder="Summary.."
            {...register("summary")}
          ></textarea>
          {errors.summary && (
            <div className="invalid-feedback">{errors.summary.message}</div>
          )}
        </div>

        <div className="mb-4 group_btn">
          <div className="dropdown">
            <button
              className="form-control text-start d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span> 10 min video consultation - $50</span>
              {/* <ChevronDown size={20} /> */}
            </button>
          </div>
        </div>

        <hr className="my-4 text-primary" />

        <div className="mb-4">
          <label className="mb-2 heading_title">Are you experiencing any dental pain?</label>
          <div
            className="btn-group w-100 group_btn"
          >
            <input type="hidden" {...register("painLevel")} />
            <button
              type="button"
              className={`btn ${
                watchPainLevel === "none"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("painLevel", "none", { shouldValidate: true })
              }
            >
              No pain
            </button>
            <button
              type="button"
              className={`btn ${
                watchPainLevel === "medium"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("painLevel", "medium", { shouldValidate: true })
              }
            >
              Medium
            </button>
            <button
              type="button"
              className={`btn ${
                watchPainLevel === "high"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("painLevel", "high", { shouldValidate: true })
              }
            >
              High
            </button>
          </div>
          {errors.painLevel && (
            <div className="text-danger mt-1">{errors.painLevel.message}</div>
          )}
        </div>

        <div className="mb-4 d-flex ">
          <label className="my-2 p-0 col-md-9 heading_title">Do you have a dental emergency?</label>
          <div className="btn-group w-100 my-2 group_btn col-md-3">
            <input type="hidden" {...register("hasEmergency")} />
            <button
              type="button"
              className={`btn ${
                watchHasEmergency === "yes"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("hasEmergency", "yes", { shouldValidate: true })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className={`btn ${
                watchHasEmergency === "no"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                setValue("hasEmergency", "no", { shouldValidate: true })
              }
            >
              No
            </button>
          </div>
          {errors.hasEmergency && (
            <div className="text-danger mt-1">
              {errors.hasEmergency.message}
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="mb-2 heading_title">
            What dental question or concern would you like to discuss today?
          </label>
          <textarea
            className={`form-control ${errors.dentalIssue ? "is-invalid" : ""}`}
            rows="4"
            placeholder="Please write your dental issue or inquiry here."
            {...register("dentalIssue")}
          ></textarea>
          {errors.dentalIssue && (
            <div className="invalid-feedback">{errors.dentalIssue.message}</div>
          )}
        </div>

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
            <button type="submit" className="btn btn_blue px-4">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConsultationStep;
