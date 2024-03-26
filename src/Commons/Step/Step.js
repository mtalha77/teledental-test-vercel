import React from "react";
import Style from "./Step.module.css";
function Step({ title, description, icon }) {
  return (
    <div className={Style.hiw_box}>
      <i><img src={icon}></img></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
export default Step;
