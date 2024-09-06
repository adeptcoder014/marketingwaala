"use client"

import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


import Footer from "@/components/footer";
import FooterCard from "@/components/footercard";
import Section from "@/components/section";
import Testimonials from "@/components/testimonials";

export default function SocialMediaMarketing() {

  return (
    <>




      <div className="md:p-6 p-3  bg-[#b0d4d0]">

        <Navbar />
        <HeroSection
          title={'Maximize Your Business Reach with Social Media Marketing'}
          description={'Harness the power of Facebook, Instagram, Twitter, and YouTube to increase brand visibility, connect with your target audience, and boost engagement.'}
          image={'socialMedia/hero.png'}
          color={'bg-gradient-to-r from-[#ba9c68] to-[#faebc0]'}
          tagContent={'Social Media Reach'}
          tagColor={'bg-white'}
        />
        {/* <Services
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'socialMedia/hero.png'}
        /> */}
        <Section
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'Leverage free advertising tools on platforms like Instagram, Facebook, and YouTube to drive website traffic, improve brand awareness, and enhance customer engagement.'}
          image={'socialMedia/middle.png'}
          tagContent={'SFree Social Media Marketing Tools for Growth'}
          tagColor={'bg-yellow-400'}
        />
        {/* <AboutSection /> */}
        <Section
          title={'Boost Sales and Revenue with Social Media Strategies'}
          description={'Use Facebook, Instagram, and YouTube to implement proven social media strategies that increase brand loyalty, attract customers, and drive profits.'}
          image={'socialMedia/end.png'}
          tagContent={' Social Media Success for Increased Profits'}
          tagColor={'bg-yellow-400'}
          sectionVisible={true}
          imageAlign={'right'}

        />

      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
