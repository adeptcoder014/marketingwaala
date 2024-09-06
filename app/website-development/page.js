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
import SectionCard from "@/components/sectionCard";

export default function InfluencerMarketing() {

  return (
    <>




      <div className="md:p-6 p-3  bg-[#b0d4d0]">

        <Navbar />
        <HeroSection
          title={'Build a Powerful Online Presence with Website Development'}
          description={'Enhance your business with custom website development using Shopify, React, Node.js, and Python. Boost user experience and drive online success.'}
          image={'websiteDev/hero.webp'}
          tagContent={'Professional Website Development'}
          tagColor={'bg-white'}
        />
        {/* <Services
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'socialMedia/hero.png'}
        /> */}
        <Section
          title={'Create SEO-Optimized, Responsive Websites for Better Ranking'}
          description={'Develop fast, responsive, and SEO-friendly websites that improve search engine ranking and provide a seamless user experience across all devices.'}
          image={'websiteDev/middle.png'}
          tagContent={'  Responsive and SEO-Optimized Websites'}
          tagColor={'bg-yellow-400'}
        />
        <Section
          title={'Grow Your Business with Scalable Website Solutions'}
          description={'Leverage advanced technologies like Shopify, React, Node.js, and Python to build scalable, secure websites that drive conversions and boost sales.'}
          image={'websiteDev/subMiddle.webp'}
          imageAlign={'right'}
          tagContent={' Website Development for Business Growth'}
          tagColor={'bg-yellow-400'}
        />
        {/* <AboutSection /> */}
        {/* <Section
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'websiteDev/end.webp'}
          sectionVisible={true}
          tagContent={' Influencer Partnerships for Business Growth'}
          tagColor={'bg-yellow-400'}

        /> */}
        {/* <SectionCard /> */}

      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
