import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import LogoGroupSection from "@/components/LogoGroupSection";
import NavBar from "@/components/NavBar";
import NewsLetterSection from "@/components/NewsLetterSection";
import Pricing from "@/components/Pricing";
import ServiceSection from "@/components/ServiceSection";
import TrustedSection from "@/components/TrustedSection";
import BookNextTripSection from "@/components/WhyworkWithous";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection2></HeroSection2>
      {/* <TrustedSection /> */}
      
      <ServiceSection />
      <BookNextTripSection></BookNextTripSection>
      <Pricing></Pricing>
      <div className="bg-sky-50 p-8 md:px-44">

      <NewsLetterSection></NewsLetterSection>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}
