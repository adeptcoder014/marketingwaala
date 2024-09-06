"use client"

import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


import Footer from "@/components/footer";
import FooterCard from "@/components/footercard";
import Testimonials from "@/components/testimonials";
import Section from "@/components/section";

export default function Home() {

  return (
    <>




      <div className="md:p-6 p-3  bg-[#b0d4d0]">

        <Navbar />
        {/* <HeroSection /> */}
        <HeroSection
          title={'Welcome to Marketingwaala – Your Trusted Digital Marketing Partner'}
          description={'Meet our team! From the savvy corporate professional to the traditional Indian shopkeeper, we understand the unique needs of every business. Whether you’re new to online marketing or looking to scale your digital presence, Marketingwaala is here to guide you through the journey of digital transformation.'}
          image={'home/heroBanner.png'}
          color={'bg-gradient-to-r from-[#f4e7d7] to-[#f4e7d7]'}
          tagContent={'Why Digital Marketing is Essential for Your Business'}
          tagColor={'bg-white'}

        />
        {/* <Services /> */}


        <Section
          title={'Discover the Power of Digital Marketing with Marketingwaala'}
          description={'Digital marketing is more than just a buzzword. It’s the key to growing your business in the modern world. From SEO optimization and branding strategies to influencer marketing and website development, our corporate professional explains how leveraging digital tools can take your business to the next level. Let us help you build a powerful online presence that drives traffic, increases engagement, and boosts sales.'}
          image={'home/middle.webp'}
          tagContent={'Why Digital Marketing is Essential for Your Business'}
          tagColor={'bg-yellow-500'}

        />

        <Section
          title={'From Traditional to Digital – Transform Your Business with Marketingwaala'}
          description={'See the transformation! Watch as our shopkeeper moves from old-school advertising to a fully digital marketing strategy. With services like SEO, influencer marketing, branding, and website development, Marketingwaala provides everything you need to make your business thrive in the digital era. Embrace the future and stay ahead of the competition with us.'}
          image={'home/end.png'}
          sectionVisible={true}
          imageAlign={'right'}
          tagContent={'Transitioning from Traditional to Digital Marketing'}
          tagColor={'bg-yellow-500'}


        />




        {/* <AboutSection /> */}
        <Testimonials />
      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
