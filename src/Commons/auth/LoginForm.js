import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas";
import { login } from "../../Auth/apis/authV1";
import { useUserContext } from "../../Context/userContext";

function LoginForm({ userRole, toggleForm }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setToken } = useUserContext();
  const history = useHistory();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = async (data) => {
    const entity =
      userRole.toLowerCase() === "patient" ? "patients" : "dentists";

    try {
      setLoading(true);
      const res = await login({
        entity: entity,
        body: data,
      });

      setToken(res?.data?.token);
      setError("");
      window.localStorage.setItem("token", res?.data?.token);

      if (entity === "dentists") {
        if (res.data.chargesEnabled) {
          history.push(`/${entity}/profile`);
        } else {
          history.push(`/${entity}/identity-verification`);
        }
      } else {
        history.push(`/${entity}/dashboard`);
      }
    } catch (error) {
      setLoading(false);
      if (error.errMsg?.toLowerCase() === "email not verified") {
      } else {
        setError(error.errMsg || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const forgotPass = () => {
    const path = `/${userRole.toLowerCase()}/forgot-password`;
    history.push(path);
  };

  return (
    <>
      <div className="auth_title">
        <h1>
          <span className="role_text">{userRole}</span>
          <span className="auth_text">Login</span>
        </h1>
        <p className="auth_subtitle">
          Register to book your online consultation.
        </p>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className="d-flex flex-column gap-2"
      >
        <div>
          <input
            type="email"
            placeholder="Email *"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password *"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password")}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <div className="forgot_password">
          <Link to={`/${userRole.toLowerCase()}/forgot-password`}>
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn btn_blue w-auto px-5 m-auto"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="signup_option">
        <p>
          Not registered as a{" "}
          {userRole === "dentist" ? "Teledental dentist" : userRole}?{" "}
          <span
            onClick={toggleForm}
            className="signup_link"
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
}

export default LoginForm;
