import React from "react";
import HeroBanner from "./HeroBanner";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import DentalGuidance from "./dental-guidance";
import ProviderCarousel from "./provider-carousel";
import Faq from "./faq";
import AppointmentBooking from "./appointment-booking";
import GetAppSection from "./get-app-section";

function LandingPageNew() {
  return (
    <>
      <Header cssClass="homePage" />

      <section className="sectionOne">
        <HeroBanner />
      </section>

      <HowItWorks />

      <DentalGuidance />

      <ProviderCarousel />

      <Faq />

      <AppointmentBooking />

      <GetAppSection />
    </>
  );
}

export default LandingPageNew;
