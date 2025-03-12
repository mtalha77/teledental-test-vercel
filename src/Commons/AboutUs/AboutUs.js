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
							color: "#0071bc",
						}}
					>
						<h2>About Teledental – Your Virtual Dental Consultation Hub</h2>
					</p>
					<p>
						<h3>
							Revolutionizing Online Dental Care with Live Dentist Consultations
						</h3>
					</p>
					<p>
						Welcome to <b>Teledental.com</b>, a leading platform for{" "}
						<b>live online dental consultations</b>. As a pioneer in{" "}
						<b>teledentistry</b> and <b>dental chat technology</b>, we provide{" "}
						<b>real-time access</b> to licensed dental professionals, offering
						expert guidance for a wide range of dental concerns. We are striving
						to continue to improve and add more exciting new features.
					</p>
					<p>
						Welcome to <b>Teledental.com</b>, the premier destination for{" "}
						<b>live online dental consultations</b> and{" "}
						<b>AI-powered virtual dental care</b>. As a pioneer in{" "}
						<b>teledentistry</b> and
						<b> advanced dental chat technology</b>, we provide{" "}
						<b>real-time access</b> to licensed dentists and{" "}
						<b>dental professionals</b>, delivering expert guidance on a wide
						range of <b>dental health concerns</b>, including{" "}
						<b>dental implants</b>, <b>cosmetic dentistry</b>,{" "}
						<b>orthodontic treatments</b>, and <b>general oral care</b>. Our
						platform is designed to make <b>dental advice</b> and{" "}
						<b>second opinions</b> more accessible, helping individuals make
						informed decisions about their oral health. At <b>Teledental.com</b>
						, we are committed to <b>continuous innovation</b>, constantly
						improving our technology and expanding our features to provide an
						even more seamless and insightful{" "}
						<b>virtual dental care experience</b>.
					</p>
					<p>
						Whether you need a <b>quick dental assessment</b>, expert advice on{" "}
						<b>dental implant options</b>, a{" "}
						<b>second opinion on a dental treatment plan</b>, or answers to{" "}
						<b>cosmetic dentistry</b> and{" "}
						<b>orthodontic clear aligner questions</b>, our platform is here to
						assist you. From <b>dental pain</b> and <b>gum issues</b> to{" "}
						<b>veneers</b>, <b>teeth whitening</b>, and{" "}
						<b>Invisalign alternatives</b>, our experienced dentists provide{" "}
						<b>personalized, professional recommendations</b> to help you make
						informed decisions about your oral health.
					</p>
					<p>
						With the <b>Teledental app</b>, available on <b>Apple iOS</b> and{" "}
						<b>Google Android</b>, you can quickly and conveniently connect with
						a <b>dentist online</b> from anywhere. Whether you're at home,
						traveling, or looking for expert dental insights before scheduling
						an in-person appointment, Teledental makes accessing professional
						dental care easy and convenient.
					</p>
					<p>
						<b>Teledental</b> is not a replacement for dental offices or
						in-person dental treatment; rather, it serves as a convenient and
						accessible platform for <b>live virtual dental consultations</b>,
						providing professional guidance, dental second opinions, and
						preliminary assessments to help patients make informed decisions
						before visiting their <b>local dentist</b> for necessary treatments
						and procedures. At <b>Teledental.com</b>, we recommend getting the
						proper dental treatment at your <b>local dentist office</b> and
						maintain that the responsibility for seeking and receiving
						appropriate dental care rests solely with the individual.
						<b>Teledental</b> can provide valuable insight and information to
						help individuals better understand various dental conditions, but
						each person must do their own due diligence when it comes to making
						dental health decisions.
					</p>
					<p>
						<h3>AI-Powered Dental Help and Live Video Dentist Consultations</h3>
					</p>
					<p>
						Teledental.com is looking to bring many more new features.
						Teledental is advancing
						<b> virtual dental care</b> with <b>AI-powered dental tools</b> and{" "}
						<b>live dentists video consultations</b> to provide enhanced online
						dental support.
					</p>
					<p>
						Patients can upload their <b>dental X-rays</b>, and dental pictures.
						In future, we can help discuss potential concerns such as{" "}
						<b>cavities</b>, <b>gum disease</b>, <b>misalignments</b>, and{" "}
						<b>early signs of oral health conditions</b>. Our{" "}
						<b>live video consultations</b> allow dentists to review
						<b> dental implant options</b>, <b>cosmetic procedures</b>, and{" "}
						<b>orthodontic treatments like clear aligners</b> in real time.
					</p>
					<p>
						By combining <b>AI-driven diagnostics</b> with{" "}
						<b>face-to-face virtual dental visits</b>, we feel we can help
						patients get expert insights on <b>restorative treatments</b>,{" "}
						<b>smile makeovers</b>, and{" "}
						<b>
							general dental health recommendations—all without leaving home.
						</b>
					</p>
					<p>
						<h3>Our Mission: Bridging the Gap Between Patients and Dentists</h3>
					</p>
					<p>
						At <b>Teledental</b>, we believe in{" "}
						<b>accessible, convenient, and high-quality dental care</b> for
						everyone. Our goal is to <b>empower patients</b> with expert
						insights and personalized recommendations, helping them make
						informed dental health decisions before visiting a clinic.
					</p>
					<p>
						While our <b>virtual consultations</b> cannot replace an in-person
						dental visit, they serve as a <b>critical first step</b> in
						understanding dental concerns, receiving professional advice, and
						exploring treatment options.
					</p>
					<p>
						<h3>Partner with Teledental</h3>
					</p>
					<p>
						While our <b>virtual consultations</b> cannot replace an in-person
						dental visit, they serve as a <b>critical first step</b> in
						understanding dental concerns, receiving professional advice, and
						exploring treatment options.
					</p>
					<p>
						We are building a strong{" "}
						<b>
							network of dental professionals, healthcare innovators, and
							technology experts
						</b>{" "}
						to expand our services. If you're passionate about the future of{" "}
						<b>teledentistry</b>, we invite you to collaborate with us.
					</p>
					<p>We are actively seeking professionals and companies in:</p>
					<ul>
						<li>General Dental Care and Cosmetic Dentistry.</li>
						<li>Dental Implant and Orthodontic Treatments.</li>
						<li>Dental AI Technology and X-Ray Analysis.</li>
						<li>Teledentistry and Virtual Dental Care Innovations.</li>
						<li>Healthcare Investment and Finance.</li>
						<li>
							Digital Dental Marketing, SEO, and Dentistry AI-Powered Outreach.
						</li>
					</ul>
					<p>
						<h3>
							The Evolution of Teledental.com – Pioneering the Future of Virtual
							Dentistry
						</h3>
					</p>
					<p>
						Teledental.com was founded by a dedicated team of professionals,
						including a licensed dentist and dental technology experts, with a
						vision to revolutionize teledentistry and online dental
						consultations. Our team has been at the forefront of live online
						dental consultations for over a decade, embracing telehealth
						advancements and continually refining our services to meet the
						growing demand for virtual dental care.
					</p>
					<p>
						As a leader in digital dentistry, Teledental.com is committed to
						expanding access to online dental consultations, helping individuals
						navigate their oral health concerns, whether it’s a dental implant
						consultation, cosmetic dentistry inquiries, or orthodontic clear
						aligner options. While we do not replace in-person dental visits, we
						provide expert insights, second opinions, and initial assessments to
						guide users before they visit a local dentist for treatment. Each
						individual is responsible for making their own informed dental
						health decisions, and we encourage proper due diligence.
					</p>
					<p>
						<h3>
							Get Expert Dental Advice Anytime – Virtual Consultations at Your
							Fingertips
						</h3>
					</p>
					<p>
						Need professional dental advice online? With Teledental.com, you can
						easily schedule a <u>live dentist virtual consultation</u> with an
						experienced dentist or a <u>local teledentist</u> from the comfort
						of your home. Whether you're concerned about wisdom tooth pain,
						tooth sensitivity, gum issues, or cosmetic dental treatments, our
						licensed dental professionals are available to provide guidance. A
						small consultation fee ensures that our dentists are compensated for
						their expertise while offering convenient, real-time access to
						virtual dental care.
					</p>
					<p>
						<h3>
							AI-Powered Virtual Dental Consultations – The Future of Online
							Dentistry
						</h3>
					</p>
					<p>
						Teledental.com is looking to integrate cutting-edge AI dental
						technology to enhance virtual dentistry consultations. This includes
						virtual dental X-rays AI diagnostic tools coming soon. Our platform
						provides:
					</p>
					<ul>
						<li>
							Live online dental consultations for dental emergencies,
							orthodontics, and general oral health concerns.
						</li>
						<li>
							AI-enhanced dental X-ray analysis, helping dentists detect
							cavities, gum disease, and impacted teeth.
						</li>
						<li>
							A <u>tele dental chatbot</u>, offering instant responses to common
							dental questions.
						</li>
						<li>
							<u>Local Video Dentistry Healthcare Services</u>, connecting
							patients with professional dental advice remotely.
						</li>
					</ul>
					<p>
						We are dedicated to improving access to virtual dental care while
						maintaining the highest standards of patient education and
						communication.
					</p>
					<p>
						<h3>
							Comprehensive Online Dental Services – What Teledental.com Offers
						</h3>
					</p>
					<p>
						Our platform provides virtual consultations with licensed dentists,
						allowing patients to receive dental advice, second opinions, and
						general oral health guidance without leaving home. While some
						procedures require in-office visits—such as root canals, veneers,
						and extractions—Teledental.com bridges the gap by providing initial
						assessments and recommendations.
					</p>
					<p>Our teledentistry platform also helps individuals explore:</p>
					<ul>
						<li>
							Dental implant options chatting and live dentist second opinions.{" "}
						</li>
						<li>
							Cosmetic dentistry treatments, including veneers and teeth
							whitening.
						</li>
						<li>
							Orthodontic clear aligner solutions like Invisalign and other
							alternatives.
						</li>
						<li>
							Gum disease evaluations and at-home oral care recommendations.
						</li>
					</ul>
					<p>
						<h3>
							Advanced Digital Dentistry Solutions for Local Dental Practices
						</h3>
					</p>
					<p>
						Teledental.com also supports dental practices in adopting local
						teledentist solutions, allowing clinics to integrate virtual
						consultations into their services. Our AI-powered technology and
						live dentist video chat solutions help practices:
					</p>
					<ul>
						<li>
							Expand local dental patient reach with{" "}
							<u>virtual dentistry consultations</u>.
						</li>
						<li>
							Improve communication with patients through AI-driven dental
							chatbot tools.
						</li>
						<li>Enhance workflow efficiency with online pre-consultations.</li>
						<li>
							Offer remote follow-ups and second opinions for patient
							convenience.
						</li>
					</ul>
					<p>
						<h3>Partner with Teledental – Innovating Virtual Dental Care</h3>
					</p>
					<p>
						<strong>Teledental.com</strong> collaborates with dental companies,
						healthcare technology innovators, and online dental professionals to
						improve teledentistry solutions worldwide. We actively seek
						partnerships with:
					</p>

					<ul>
						<li>Dentists and dental professionals.</li>
						<li>Cosmetic and restorative dentistry experts.</li>
						<li>Orthodontic specialists and dental implant professionals.</li>
						<li>AI healthcare technology companies.</li>
						<li>Digital marketing and SEO specialists for dental services.</li>
					</ul>

					<p>
						For partnership opportunities or inquiries about local teledental
						solutions, visit{" "}
						<a
							href="https://www.teledental.com/contact-us"
							target="_blank"
						>
							Teledental.com/contact-us{" "}
						</a>
						or email us at{" "}
						<a href="mailto:service@teledental.com">service@teledental.com</a>.
					</p>
					<p>
						<h3>
							AI-Powered Dental Chatbot and Live Virtual Dentist Assistance
						</h3>
					</p>
					<p>
						Teledental.com integrates an AI-driven dental chatbot, offering
						instant responses to common dental questions and helping patients
						navigate their oral health concerns efficiently. Our live AI dentist
						chat technology enhances patient engagement, allowing users to get
						immediate insights about their dental issues before speaking to a
						live dentist.
					</p>
					<p>
						<h3>
							Your Trusted Source for Virtual Dental Advice and Live Dentists
							Second Opinions
						</h3>
					</p>
					<p>
						From toothaches and wisdom tooth pain to dental trauma, gum disease,
						and cosmetic dentistry questions, Teledental.com is your go-to
						platform for online dental consultations and expert advice.
					</p>
					<p>
						<h3>
							Understanding the Benefits and Limitations of Virtual Dentistry
						</h3>
					</p>
					<p>
						While virtual dental consultations offer many advantages, they also
						have limitations. Our services provide:
					</p>

					<ul>
						<li>Dental second opinions and treatment recommendations.</li>
						<li>Potential antibiotic prescriptions in select regions.</li>
						<li>
							Guidance on handling dental emergencies before in-office
							treatment.
						</li>
					</ul>

					<p>
						However, patients must visit a local dentist for in-person exams,
						X-rays, and hands-on procedures that cannot be performed virtually.
					</p>
					<p>
						<h3>Teledental: Bridging the Gap in Online Dental Care</h3>
					</p>
					<p>
						Teledental was established to expand access to dental expertise and
						patient education worldwide. In certain cases, we offer antibiotic
						prescriptions, though we do not prescribe pain medications. It is
						essential for users to understand the scope and limitations of
						teledental services.
					</p>
					<p>
						<h3>
							Online Second Opinions and Virtual Dentist Consultations – What
							You Need to Know
						</h3>
					</p>
					<p>
						When seeking dental advice through Teledental, it’s important to:
					</p>

					<ul>
						<li>
							Clearly state your dental concerns and virtual dentistry
							questions.
						</li>
						<li>
							Upload any relevant dental X-rays or images for a more accurate
							assessment.
						</li>
						<li>
							Understand that a <u>virtual live dentist consultation</u> does
							not replace an in-office exam.
						</li>
					</ul>

					<p>
						By providing concise, specific details, you can maximize the value
						of your limited consultation time and receive the most relevant
						advice from our dentists.
					</p>
					<p>
						<h3>The Role of Antibiotics in Virtual Dental Consultations</h3>
					</p>
					<p>
						For certain dental conditions, antibiotics may be prescribed to help
						manage infections. However, it is critical to:
					</p>

					<ul>
						<li>Take only prescribed medications as directed.</li>
						<li>Be aware of any allergies or potential side effects.</li>
						<li>
							Consult a local physician or dentist if you experience an adverse
							reaction.
						</li>
					</ul>
					<p>
						<h3>
							Teledental Services – Expanding Virtual Dentistry and
							Teledentistry Innovations
						</h3>
					</p>
					<p>
						Teledental.com is dedicated to expanding virtual dental care
						services, helping people access live online dental consultations,
						and providing informative teledentistry solutions. As we grow, our
						mission is to enhance AI-powered dental support and bring more
						innovative digital dentistry tools to users worldwide.
					</p>
					<p>
						<h3 style={{ textAlign: "center" }}>
							Connect with Teledental – Advancing the Future of Dentistry
							Together
						</h3>
						<h3>Teledental.com welcomes partnership inquiries from:</h3>
					</p>
					<ul>
						<li>Healthcare technology companies</li>
						<li>Dental professionals and businesses</li>
						<li>Online wellness and healthcare innovators</li>
					</ul>

					<p>
						For collaboration opportunities, contact us at{" "}
						<a href="mailto:service@teledental.com">service@teledental.com</a>.
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
									<TextArea
										rows={4}
										placeholder="Comments ..."
									/>
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
