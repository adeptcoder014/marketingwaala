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

export default function InfluencerMarketing() {

  return (
    <>




      <div className="md:p-6 p-3  bg-[#b0d4d0]">

        <Navbar />
        <HeroSection
          title={'Boost Your Business with a Powerful Branding Strategy'}
          description={'Effective branding is crucial for establishing your business’s identity and market presence. It’s not just about logos and colors but about creating a compelling brand story and positioning your business strategically to stand out and connect with your target audience.'}
          image={'branding/hero.webp'}
          tagContent={'Branding Strategy'}
          tagColor={'bg-[#b88929]'}

        />
        {/* <Services
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'socialMedia/hero.png'}
        /> */}
        <Section
          title={'Create a Strong Brand Identity to Drive Engagement and Loyalty'}
          description={' Building a strong brand identity involves crafting a memorable logo, selecting impactful brand colors, and developing clear brand messaging. These elements are essential for effective brand identity design, driving customer engagement, and fostering brand loyalty.'}
          image={'branding/middle.webp'}
          tagContent={'SEO Services'}
          tagColor={'bg-[#b88929]'}

        />
        {/* <AboutSection /> */}
        <Section
          title={'Ensure Brand Consistency Across All Channels for Greater Recognition'}
          description={'Achieve brand consistency across all touchpoints, including digital marketing, social media, and packaging. A unified brand presence enhances recognition, builds trust, and reinforces your brand identity across diverse channels.'}
          image={'branding/end.webp'}
          sectionVisible={true}
          imageAlign={'right'}
          tagContent={'SEO Services'}
          tagColor={'bg-[#b88929]'}


        />

      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
