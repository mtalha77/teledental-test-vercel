import React from "react";
import Style from "./ConnectDentist.module.css";
import Step from "../Step/Step";
import { useHistory } from "react-router-dom";
import icon1 from "../../../src/assets/img/hiw_step1.svg";
import icon2 from "../../../src/assets/img/hiw_step2.svg";
import icon3 from "../../../src/assets/img/hiw_step3.svg";
import { Link } from "react-router-dom";
function ConnectDentist() {
  const history = useHistory();
  return (
    <div className={Style.mainDiv}>
      <div className={Style.connectDentist_headlines}>
        <div className="autoContent">
          <p data-aos="fade-up" data-aos-once="false" data-aos-duration="700">
            <button
              className={Style.underline_pink}
              onClick={() => history.push("patient-signup")}
            >
              Click here
            </button>
            to start your Teledental consultation
          </p>
        </div>
      </div>
      <div className={Style.hiw_list_parent}>
        <div className="autoContent">
          <h2 data-aos="fade-inn" data-aos-once="false">How it Works</h2>
          <div className={Style.connectDentist}>
            <div className={Style.box_cell} data-aos="fade-inn" data-aos-once="false" data-aos-offset="50">
              <Step
                title="Step 1"
                description="Complete a simple patient sign-up form."
                icon={icon1}
              />
            </div>
            <div className={Style.box_cell} data-aos="fade-inn" data-aos-once="false" data-aos-offset="80">
              <Step title="Step 2" description="Make a convenient appointment." icon={icon2} />
            </div>
            <div className={Style.box_cell} data-aos="fade-inn" data-aos-once="false" data-aos-offset="100">
              <Step
                title="Step 3"
                description="Make payment or  insurance (if accepted)." icon={icon3}
              />
            </div>
          </div>


          <div className={Style.hiw_btn}>
            <Link to="/how-it-works"  name="patient" className="brix---btn-primary w-button btn-edit btn_blue mb-2"
            >
              How it Works 
            </Link>
            <Link to="/patient-signup"  name="patient" className="brix---btn-primary w-button btn-edit btn_blue mb-2"
            >
              Connect to dentist
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
export default ConnectDentist;
