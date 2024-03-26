import React  from "react";
import Style from "./HomeFaqs.module.css";
import { Link } from "react-router-dom";
// import img from "../../assets/img/hm_faq_img.png";
import img from "../../assets/img/hm_faq_img_1.png";


function HomeFaqs() {
    return (
        <section className={Style.faq_main}>
            <div className="autoContent">
                <div className={Style.faq_inner}>
                <div className={Style.faq_right} data-aos="fade-left" data-aos-duration="400">
                        <span><img src={img} alt="#"></img></span>
                        {/* <strong>
                             faq
                             <small>teledental</small>
                        </strong> */}
                    </div>
                    <div className={Style.faq_left}  data-aos="fade-right" data-aos-duration="500">
                        <h2>FAQ</h2>
                        <h3>Want to learn more about us?</h3>
                        <p>
                            <span>As a patient or dentist?</span>
                            Do you have Virtual Teledental Question
                            and like to get more Virtual Dental Care
                            Consultation Online Information?
                            <br />
                            Live Teledentistry, Best Live
                            Dentists, Local Teledentist Office Help,
                            Virtual Teledentists Question Answers,
                            Virtual Dental Help Consulting and more.
                        </p>


                        <div className={Style.faq_btn_row}>
                            <Link
                                to="/faqs-question"
                                name="faqs"
                                className="color_white btn_blue"
                            // onClick={() => setIsSignInModalVisible(true)}
                            >
                                Go to FAQ's
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFaqs;