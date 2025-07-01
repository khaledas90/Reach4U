import { Footer } from "@/components/Layout/footer";
import { Header } from "@/components/Layout/header";
import React from "react";
import Hero from "./_components/hero";
import WhoWeAre from "./_components/WhoWeAre";
import OurServices from "./_components/OurServices";
import { Portfolio } from "./_components/Portfolio";
import WhyChooseUs from "./_components/WhyChooseUs";
import { Contact } from "./_components/Contact";

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
