import React from "react";
import Header from "./Header";
import HelmetComponent from "./HelmetComponent";
import { Form, Input, Button, Alert, message } from "antd";
import { contactUs } from "../Auth/apis/authV1";
import Swal from "sweetalert2";
import bannerImg from '../assets/img/aboutPage_bg.png';
import dentisImg from '../assets/img/aboutPage_img.png';

const VirtualTeleDentistry = () => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const body = {
        ...values,
        type: "virtual_tele_devtistry",
        // location: address,
      };
      const res = await contactUs({ body });
      if (res) {
        Swal.fire({
          icon: "success",
          title:
            "Thank you for reaching us out. We'll get in touch with you shortly.",
          showConfirmButton: false,
          timer: 2000,
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
    <div>
      <Header />


      <div className="vtd_top">
        <div className="vtd_banner">
          <img src={bannerImg} alt="#"></img>
        </div>

        <div className="vtd_content">

          <div className="autoContent">
            <div className="vtd_flexible">
              <div className="vtd_left">
                <div className="vtd_headlines">
                  <h2>Teledental is adding people to the team, <span> adding dentists, and partnering with companies.</span> </h2>
                  <p>JJoin Our Team, Add Teledental Services, Best Dental Chatbot, Dental Directory Listings, and more!  Join us at teledental.com today and take advantage of
                    the best virtual dental care platform online.
                    Our online live dental care consultations, local teledentistry consulting, and dental marketing online services are unmatched in the industry. Contact us today to learn more about how we can help you grow your business and take your practice to the next level.</p>

                  <h4>Can message us by filling out the form below: </h4>
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
                          label="Phone Number"
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
                          className="mb-2 questionsLabell"
                        >
                          Reason for inquiry (Please write):
                        </label>
                        <Form.Item name="comment">
                          <TextArea rows={4} placeholder="Comments ..." />
                        </Form.Item>
                      </div>
                    </div>
                    {/* <div className="col-sm-12 col-md-12 d-none">
              <Form.Item
                label="Type"
                name="type"
                initialValue="virtual_tele_dentistry"
              >
                <Input disabled />
              </Form.Item>
            </div> */}
                    <Form.Item className="text-center w-100">
                      <Button
                        className="w-25 signInButton brix---btn-primary w-button d-inline-flex justify-content-center align-items-center"
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
              <div className="vtd_right">
                  <div className="vtd_rightImg">
                      <img src={dentisImg} alt="#"></img>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="cosmetic-pd-wrapper footer-center-pages pt-0">
        <HelmetComponent
          title="Join us dentists / companies"
          name="Cosmetic Dentsistry"
          content="What is Cosmetic Dentistry? Teledental Cosmetic Dental Care Consult. Many people want to understand how to make their
                teeth look better cosmetically"
        />
        {/* <h2 style={{ textAlign: "center", color: "#3D85C6" }}>Teledental Consultation with Live Dentists - Virtual Teledentistry Dentists Consult</h2>
        <p>
          <h3>
            Join Our Team,{" "}
            <u>
              Add Teledental Services, Best Dental Chatbot, Dental Directory
              Listings
            </u>
            , and more!
          </h3>
        </p>

        <p>
          Join us at teledental.com today and take advantage of the best virtual dental care platform online. Our online live dental care
          consultations, local teledentistry consulting, and dental marketing
          online services are unmatched in the industry. Contact us today to
          learn more about how we can help you grow your business and take your
          practice to the next level.
        </p>
        <br></br>
        <p>Can message us by filling out the form below: ssss</p> */}

        <p>
          <h3>
            <u>Join our Teledental Virtual Dentists Team </u>
          </h3>
        </p>
        <p>
          <u>
            Welcome to Teledental.com - the ultimate dental solution for all
            your dental needs! We're not just another dental company - we're the
            pioneer of virtual dental care and changing the game.
          </u>
        </p>
        <p>
          Want to join our team, get teledental service - email us at{" "}
          <a href="mailto:service@teledental.com">service@teledental.com</a>.
        </p>
        <p>
          <h3>
            <u>
              No company can match our all-in-one chat, teledental and dental
              marketing solution for your dental practice{" "}
            </u>
          </h3>
        </p>
        <p>
          <u>
            What sets us apart from the competition? It's simple - we offer an
            all-in-one solution that no other company can match. From live
            virtual dental consultations to a dental chatbot, Teledental
            directory, and marketing services, we have it all.
          </u>
        </p>
        <p>
          <h3>
            <u>
              Best Dental Practice Marketing and Local Dentists Directory
              Listings Online
            </u>
          </h3>
        </p>
        <p>
          <ul>
            <li>
              <u>Teledental.com and Teledental app. </u>
            </li>
            <li>
              <u>DentalChat.com and Dental Chatbot.</u>
            </li>
            <li>
              <u>DentistList.com, MapDentist.com and more. </u>
            </li>
          </ul>
        </p>
        <p>
          <u>
            By joining our powerful dental ecosystem, you'll gain access to a
            world of benefits. You can put your dental office on the map and
            attract new patients effortlessly. Our teledental consulting service
            is a great way to support your practice, and you can do it all from
            the comfort of your own office - no travel expense required!
          </u>
        </p>
        <p>
          <h3>
            <u>
              Dentists and Dental Professionals - Join our Teledental Virtual
              Dentists Team!{" "}
            </u>
          </h3>
        </p>
        <p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <u>- Partner and work with us.</u>
            </li>
            <li>
              <u>- Can work for any place, at any time you like. </u>
            </li>
            <li>
              <u>- Flexible hours. </u>
            </li>
            <li>
              <u>- We offer exciting packages. </u>
            </li>
          </ul>
        </p>
        <p>Contact us at</p>
        <p>
          <a href="mailto:service@teledental.com ">service@teledental.com </a>or{" "}
          <a href="mailto:service@dentalchat.com ">service@dentalchat.com </a>
        </p>
        <p>
          <u>
            If you're a dental marketer or company, we can partner with you to
            help you grow your business. We're constantly innovating and
            expanding our reach, partnering with DentalChat.com, MapDentist.com,
            DentistList.com, and many other platforms to provide the best
            possible service to our clients.
          </u>
        </p>
        <p>
          <u>For licensed dentists, dental companies, dental insurance</u>
        </p>
        <p>
          <u>
            groups, dental professionals, and accredited investors, Teledental
            is the perfect partner. Our virtual teledental service is the
            ultimate marketing tool for your practice, helping you attract new
            patients and grow your business. With over 15 years of experience in
            the dental space, we're the experts you can trust any day, anytime!
          </u>
        </p>
        <p>
          <h3>
            Best Live Dentist Virtual Dentistry Services, Become a Local
            Teledentist Office with Teledental
          </h3>
        </p>
        <p>
          <u>
            Join us at <a href="https://teledental.com/">teledental.com</a>{" "}
            today and take advantage of the best virtual dental care services
            available. Our online live dental care consultations, local
            teledentistry consulting, and dental marketing online services
          </u>
        </p>
        <p>
          <h3>
            24/7 Dental Connection, Live Dentist Consultation Options, Virtual
            Dentists Services, Adding Local Teledentist Practice Technology by
            using Teledental & DentalChat Chatbot Innovation{" "}
          </h3>
        </p>
        <p>
          Using modern telemedicine technology for dental care is a reality and
          can help people get access to more live dental information
          suggestions. Using a Live{" "}
          <i>
            Teledentistry Virtual Dental Consulting technology can help people
            and dentists
          </i>{" "}
          save time & money. Less time traveling and using up chairside time.
          Can use Teledental and DentalChat 24/7, from any place - for patients
          and dentists to communicate. As we mentioned, still the patient will
          need to visit a local dental practice to get dental x-rays, full
          dental exam and the required dental treatment.
        </p>
        <p>
          <h3>
            Adding Local Teledentistry Consulting and be part of larger Vritual
            Dentists Community
          </h3>
        </p>
        <p>
          As we are seeing, the online dental telemedicine community of dentists
          is growing. Using Teledental technology and marketing with us at
          Teledental.com has many benefits
        </p>
      </div>
    </div>
  );
};

export default VirtualTeleDentistry;
