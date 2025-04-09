import React, { useState } from "react";
import Header from "../Header";
import "./auth.css";
import AuthCard from "./AuthCard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Auth({ userRole = "patient" }) {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="d-flex flex-column gap-5">
      <Header />

      <AuthCard>
        {isLoginForm ? (
          <LoginForm userRole={userRole} toggleForm={toggleForm} />
        ) : (
          <SignupForm userRole={userRole} toggleForm={toggleForm} />
        )}
      </AuthCard>
    </div>
  );
}

export default Auth;
