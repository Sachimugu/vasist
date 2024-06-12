import BookNextTripSection2 from "@/components/BookNextTripSection";
import ContactLogos from "@/components/ContactLogos";
import FooterSection from "@/components/FooterSection";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import Heroo from "@/components/Heroo";
import Howwouldyo from "@/components/Howwouldyo";
import LogoGroupSection from "@/components/LogoGroupSection";
import NavBar from "@/components/NavBar";
import NewsLetterSection from "@/components/NewsLetterSection";
import Pricing from "@/components/Pricing";
import ServiceSection from "@/components/ServiceSection";
import TrustedSection from "@/components/TrustedSection";
import W1 from "@/components/W1";
import W2 from "@/components/W2";
import WhoWeare from "@/components/WhoWeare";
import BookNextTripSection from "@/components/WhyworkWithous";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <NavBar></NavBar>

      <Heroo></Heroo>
      <p className="bg-sky-200  md:text-[2.725rem] text-[1.525rem] leading-9 md:leading-normal px-2 py-3  text-slate-900 font-[700] text-center md:py-8 md:px-16">
        RemoteRaters: Helping You Earn A Passive Income
      </p>
      <W1></W1>
      <ServiceSection />
      <W2></W2>
      {/* <Hero></Hero> */}
      {/* <WhoWeare></WhoWeare> */}
      <BookNextTripSection></BookNextTripSection>
      {/* <BookNextTripSection2></BookNextTripSection2> */}
      <Howwouldyo/>
      <TrustedSection />
      
      {/* <ServiceSection /> */}
      {/* <Pricing></Pricing> */}
      <ContactLogos></ContactLogos>
      <div className="bg-sky-200 p-8 md:px-44">

      <NewsLetterSection></NewsLetterSection>
      </div>

      <FooterSection></FooterSection>
    </div>
  );
}


