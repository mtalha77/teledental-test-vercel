import React, { useState } from "react";
import HelmetComponent from "../HelmetComponent";
import Header from "../Header";
import styles from "./AboutUs.module.css";
import { Form, Input, Button, Alert } from "antd";
import { contactUs } from "../../Auth/apis/authV1";
import Swal from "sweetalert2";

function AboutUs() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const { TextArea } = Input;
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const body = {
        ...values,
        type: "about_us",
      };
      const res = await contactUs({ body });
      if (res) {
        Swal.fire({
          icon: "success",
          title:
            "Thank you for reaching us out. We'll get in touch with you shortly.",
          showConfirmButton: false,
          timer: 3000,
        });
      }
      setError("");
      setLoading(false);
      form.resetFields();
    } catch (error) {
      setLoading(false);
      setError(error.errMsg);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          color: "#000",
          maxWidth: "900px",
          margin: "0 auto 20px",
        }}
        className="contact-us-section pt-96 px-3"
      >
        <div className="pt-4">
          <HelmetComponent
            title="About Us | Teledental"
            name="About Us"
            content="Teledental.com is leading the way with new virtual dentistry
                    consulting and more. We are looking at providing useful
                    local teledentistry info, while using the best virtual
                    dental technology to that."
          />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2>About Us</h2>
          </p>
          <p>
            <h3>
              Welcome to Teledental - Your Virtual Dental Consultation Hub
            </h3>
          </p>
          <p>
            Introducing Teledental, a pioneer in the teledental and dental chat
            industry. We’re providing live virtual dental consultations via
            Teledental.com and our user-friendly Teledental app, available on
            both Apple iOS and Google Android app stores.
          </p>
          <p>
            Our mission is to bridge the gap between patients and dental
            professionals. This is done by granting easy access to valuable
            dental information and dental suggestions to take into
            consideration. While we acknowledge that our virtual teledental
            service cannot replace in-person visits to your local dentist, we
            strive to offer valuable insights and assistance to users in need.
          </p>

          <p>
            <h3>
              Continuing to Grow and Expand our Virtual Dentists Consulting and
              AI Dental Care Chat Messaging with Teledental
            </h3>
          </p>
          <p>
            We appreciate your support. Even though we have been pioneers, we
            know this is the beginning of our journey. As such, we are looking
            to build our team, partner with AI health care financial funds,
            accredited investors, dental companies, dental professionals and
            dentists.
          </p>

          <p>
            <h3>Join Us</h3>
          </p>
          <p>Are you</p>
          <p>
            <ol style={{ Type: "1" }}>
              <li>Dentist</li>
              <li>Dental Professional</li>
              <li>Dental Company</li>
              <li>Health Care Finance</li>
              <li>Accredite Investor</li>
              <li>IT Tech</li>
              <li>SEO pro</li>
              <li>Marketing and Sales expert</li>
              <li>Social media professional / company</li>
              <li>AI health care pro or company</li>
            </ol>
          </p>
          <p>
            Then you should join and partner with us. Simply email us at &nbsp;
            <a href="mailto:service@teledental.com">
              service@teledental.com
            </a>{" "}
            for more information.
          </p>
          <p>
            <h3>
              Teledental's Comprehensive Services - Live Virtual Dentist
              Consultation, Virtual Dental Exam Discussion and Local Dental Care
              Information Help:
            </h3>
          </p>
          <p>
            <ul>
              <li>Live virtual dentistry consultations with live dentists.</li>
              <li>Dental antibiotic prescriptions in select regions.</li>
              <li>Informed second opinions on dental queries.</li>
              <li>
                Empowering users to make informed decisions through more dental
                insight.
              </li>
              <li>
                Recommend proper dental x-rays, and in-office dental
                examinations with local dentists.
              </li>
            </ul>
          </p>
          <p>
            <h3>The Birth of Teledental.com:</h3>
          </p>
          <p>
            Teledental was conceived by a dedicated team of professionals,
            including a dentist, who shared a passion for technology and dental
            care. Our founders were the pioneers behind DentalChat.com over 12
            years ago. Enabling live dental chats with dentists in real-time. As
            telehealth and dental telemedicine evolved, we embraced the emerging
            technology, adapting to its limitations.
          </p>
          <p>
            As a leading innovator in the virtual dental care domain, Teledental
            aims to expand access to dental expertise and information. Though we
            do not replace traditional dental care, we provide invaluable
            support for users seeking dental advice or second opinions. Users
            are encouraged to exercise their own judgment and perform due
            diligence in making dental decisions.
          </p>
          <p>
            <h3>
              Get Your Dental Questions Answered with Teledental - Virtual
              Consultations at Your Fingertips
            </h3>
          </p>
          <p>
            Are you in need of expert dental advice? Teledental is here for you!
            Schedule a live virtual consultation with a skilled dentist by
            simply completing the form. A nominal fee is required for this
            service, ensuring our dentists are compensated for their expertise.
          </p>
          <p>
            <h3>
              Introducing AI-Powered Teledental Consultations - Live Virtual
              Dentistry at Its Best
            </h3>
          </p>
          <p>
            Teledental.com is revolutionizing the industry by offering virtual
            dental consultations with the latest technology. Our goal is to
            provide valuable local teledentistry information and elevate your
            online dental care experience.
          </p>
          <p>
            <h3>What Does Teledental Offer?</h3>
          </p>
          <p>
            Our services encompass online virtual consultations with dentists,
            allowing both patients and dental professionals to connect without
            leaving their respective locations. Though there are limitations,
            such as being unable to perform root canals or veneer procedures
            virtually, Teledental bridges the gap for informative consultations
            while still encouraging patients to visit their local dental offices
            for treatment.
          </p>
          <p>
            <h3>
              Experience Cutting-Edge Dental Technology and Patient
              Communication Tools
            </h3>
          </p>
          <p>
            Teledental is dedicated to providing innovative dental technology
            and communication tools for both patients and dentists. Dental
            practices can benefit from our local teledental services offered at
            &nbsp;
            <a href="https://teledental.com/">Teledental.com</a>.
          </p>
          <p>
            <h3>
              Transform Your Dental Practice into a Local Teledentist Office
            </h3>
          </p>
          <p>
            Teledental.com supports dental practices in their transition to
            local teledentist offices by offering our advanced teledental
            technology nationwide.
          </p>
          <p>
            <h3>
              Partner with Teledental - Live Virtual Dental Care Using Video
              Dentistry Healthcare Technology
            </h3>
          </p>
          <p>
            At Teledental, we collaborate with dental companies, professionals,
            and online healthcare businesses. To get in touch with us for local
            teledental inquiries, visit &nbsp;
            <a href="/contact-us">https://teledental.com/contact-us.</a>
          </p>
          <p>
            <h3>
              AI-Driven Virtual Dentistry, Live AI Dentist Chatbot, and Dental
              Healthcare Information
            </h3>
          </p>
          <p>
            Teledental networks with DentalChat.com and the DentalChat App to
            deliver top-notch AI dental chat technology and the best dental
            chatbot service for local dental practices. Contact us at &nbsp;
            <a href="mailto:service@teledental.com">
              service@teledental.com
            </a>{" "}
            for more information.
          </p>
          <p>
            <h3>
              Your Go-To Platform for Virtual Dental Consultations and Expert
              Advice
            </h3>
          </p>
          <p>
            Teledental is here to assist with a wide range of dental concerns,
            from toothaches, wisdom tooth pain, and dental accidents to cosmetic
            dentistry questions. Experience the best in virtual dental care and
            get a second opinion from our live dentists online.
          </p>
          <p>
            <h3>
              The Pros and Cons of Local Teledentistry Consultations and Online
              Dental Care
            </h3>
          </p>
          <p>
            While virtual live dentist consultations via Teledental offer
            numerous benefits, there are inherent limitations. Teledental
            services can provide helpful suggestions, potential antibiotic
            prescriptions, and dental second opinions. However, patients still
            need to visit their local dental practice for comprehensive dental
            care, x-rays, and full intraoral in-office examinations.
          </p>
          <p>
            <h3>
              Teledental: Bridging the Gap with Dental Antibiotics and Online
              Exam Recommendations
            </h3>
          </p>
          <p>
            Teledental was established to increase access to dental information
            and services across the globe. In select regions, we can prescribe
            dental antibiotics, although we do not prescribe pain medications.
            It is essential to understand the limitations of teledental
            services.
          </p>
          <p>
            <h3>
              Local Virtual Dental Second Opinions: Streamlined Inquiries for
              Live Dentist Recommendations
            </h3>
          </p>
          <p>
            When seeking dental advice via Teledental, be sure to clarify your
            question beforehand. Our service aims to provide live dentist
            recommendations for dental inquiries. To make the most of your
            limited consultation time, focus on the information you need most.
            Keep in mind that you will still need to visit a local dental
            practice for treatments such as repairing a chipped tooth.
          </p>
          <p>
            <h3>Virtual Dentistry: Antibiotics and Medication Discussion</h3>
          </p>
          <p>
            When taking antibiotics, be aware of potential allergic reactions.
            If you experience an adverse reaction, discontinue the medication
            and consult your local physician or dentist.
          </p>
          <p>
            <h3>
              Teledental Services - Helping People Get Live Dentist
              Consultation, Local Teledentistry Information Discussion and
              Teledentist Office Support
            </h3>
          </p>
          <p>
            Our goals are to continue to expand and to help people get the live
            dentist consulting and virtual teledentistry info with us. As we
            grow our Virtual Dental Care and Local Teledental Services, we hope
            to provide our users with more dental information.
          </p>
          <p>
            <h3>Connect with Teledental: Enhancing Dental Care Together</h3>
          </p>
          <p>
            Teledental.com and the Teledental App welcome partnership inquiries
            from healthcare technology companies, dental businesses, dentists,
            dental professionals, and healthcare wellness professionals. Our
            mission is to improve dental care for everyone, putting more smiles
            on faces in the long run.
          </p>
          <p>
            For more information or to discuss potential collaborations, feel
            free to contact us or email &nbsp;
            <a href="mailto:service@teledental.com">service@teledental.com.</a>
          </p>
        </div>
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="ant-form ant-form-vertical Contact-us-form signup-page-wrapper"
        >
          {error && (
            <Alert
              style={{ marginBottom: "20px" }}
              message={error}
              type="error"
              showIcon
            />
          )}

          <div className="row d-flex business- ">
            <div className="col-sm-12 col-lg-6">
              <div className="mb-3">
                <Form.Item
                  label="Name"
                  name="name"
                  placeholder="Name"
                  rules={[
                    {
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="mb-3">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Invalid Email format!",
                    },
                    { message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="mb-3">
                <Form.Item
                  label="Confirm Email"
                  name="confirm email"
                  rules={[
                    {
                      type: "email",
                      message: "Invalid Email!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("email") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error("Email do not match"));
                      },
                    }),
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="mb-3">
                <Form.Item
                  label="Phone Number (Optional)"
                  name="contactNumber"
                  rules={[
                    {
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="col-sm-12 col-lg-12">
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className={`mb-2 ${styles.questionsLabel}`}
                >
                  Reason for inquiry (Please write):
                </label>
                <Form.Item name="comment">
                  <TextArea rows={4} placeholder="Comments ..." />
                </Form.Item>
              </div>
            </div>

            {/* <div className="col-sm-12 col-md-12 d-none">
              <Form.Item label="Type" name="type" initialValue="about_us">
                <Input disabled />
              </Form.Item>
            </div> */}

            <Form.Item className="text-center w-100">
              <Button
                className="w-25 signInButton brix---btn-secondary w-button d-inline-flex justify-content-center align-items-center"
                block
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}
export default AboutUs;
