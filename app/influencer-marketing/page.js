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
          title={'Boost Brand Awareness with Influencer Marketing'}
          description={'Leverage Instagram, YouTube, and TikTok influencers to enhance brand visibility, drive audience engagement, and increase online presence.'}
          image={'influnencerMar/hero.png'}
          tagContent={'Power of Influencer Marketing'}
          tagColor={'bg-white'}
        />
        {/* <Services
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'socialMedia/hero.png'}
        /> */}
        <Section
          title={'Grow Your Business with Influencer Collaborations'}
          description={'Collaborate with top influencers to create authentic content, reach your target audience, and improve customer engagement. Use Instagram and YouTube for impactful influencer marketing.'}
          image={'influnencerMar/middle.png'}
          tagContent={' Influencer Partnerships for Business Growth'}
          tagColor={'bg-yellow-400'}
        />
        {/* <AboutSection /> */}
        <Section
          title={'Boost Sales and Engagement with Data-Driven Influencer Campaigns'}
          description={'Increase sales and ROI through strategic influencer marketing campaigns. Build brand loyalty and trust by tapping into the power of influencers on Instagram, YouTube, and TikTok'}
          image={'influnencerMar/end.png'}
          sectionVisible={true}
          imageAlign={'right'}
          tagContent={'  Achieving Success with Influencer Marketing'}
          tagColor={'bg-yellow-400'}
        />

      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
