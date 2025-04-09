import React from "react";
import Logo from "../../shared/Logo";

function AuthCard({ children }) {
  return (
    <div className="auth_container">
      <div className="auth_card">
        <Logo />
        {children}
      </div>
    </div>
  );
}

export default AuthCard;
