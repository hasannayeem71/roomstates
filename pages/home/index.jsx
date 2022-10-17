
import React from "react";
import { AboutSection } from "../../components/AboutUsSection";
import AvailableServices from "../../components/AvailableServices";
import { FooterSocial } from "../../components/Footer";
import { HeroContentLeft } from "../../components/HeroSection";
import { Privacy } from "../../components/PrivacySection";
import { RoomBanner } from "../../components/RoomBanner";
import { ServiceSection } from "../../components/ServiceSection";

const Landing = () => {
  return (
    <>
      <HeroContentLeft />
      <RoomBanner />
      <ServiceSection />
      <AvailableServices />
      <Privacy />
      <AboutSection/>
      <FooterSocial/>
    </>
  );
};

export default Landing;
