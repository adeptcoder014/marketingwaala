"use client";

import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/carousel";
import ContactusHero from "@/components/ContactusHero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

import Footer from "@/components/footer";
import FooterCard from "@/components/footercard";
import Testimonials from "@/components/testimonials";
import Section from "@/components/section";
import MarketingForm from "@/components/MarketingForm";

export default function Home() {
  return (
    <>
      <div className="md:p-6 p-3  bg-[#b0d4d0]">
        <Navbar />
        {/* <HeroSection /> */}
        <ContactusHero
          title={
            "Get in Touch for Expert Digital Marketing, SEO, and Web Development Solutions!"
          }
          // description={
          //   "Meet our team! From the savvy corporate professional to the traditional Indian shopkeeper, we understand the unique needs of every business. Whether you’re new to online marketing or looking to scale your digital presence, Marketingwaala is here to guide you through the journey of digital transformation."
          // }
          // image={"getstarted/Contact-us.jfif"}
          image={"getstarted/Contactus-new.png"}
          color={"bg-gradient-to-r from-[#f4e7d7] to-[#f4e7d7]"}
          
        
        />
        {/* <Services /> */}
        <MarketingForm />
        {/* <Section
          title={"Discover the Power of Digital Marketing with Marketingwaala"}
          description={
            "Digital marketing is more than just a buzzword. It’s the key to growing your business in the modern world. From SEO optimization and branding strategies to influencer marketing and website development, our corporate professional explains how leveraging digital tools can take your business to the next level. Let us help you build a powerful online presence that drives traffic, increases engagement, and boosts sales."
          }
          image={"home/middle.webp"}
          tagContent={"Unlock Your Business's Full Potential"}
          tagColor={"bg-[#b88929]"}
        /> */}
      </div>

      {/* <FooterCard /> */}
      <Footer />
    </>
  );
}
