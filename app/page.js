import FooterSection from "@/components/FooterSection";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import Heroo from "@/components/Heroo";
import LogoGroupSection from "@/components/LogoGroupSection";
import NavBar from "@/components/NavBar";
import NewsLetterSection from "@/components/NewsLetterSection";
import Pricing from "@/components/Pricing";
import ServiceSection from "@/components/ServiceSection";
import TrustedSection from "@/components/TrustedSection";
import WhoWeare from "@/components/WhoWeare";
import BookNextTripSection from "@/components/WhyworkWithous";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <NavBar></NavBar>

      <Heroo></Heroo>
      {/* <HeroSection></HeroSection> */}
      <WhoWeare></WhoWeare>
      <BookNextTripSection></BookNextTripSection>
      <TrustedSection />
      
      {/* <ServiceSection /> */}
      <Pricing></Pricing>
      <div className="bg-sky-50 p-8 md:px-44">

      <NewsLetterSection></NewsLetterSection>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}
