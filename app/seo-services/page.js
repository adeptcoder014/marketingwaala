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
          title={'Unlock Your Online Potential: The Power of SEO for Your Business'}
          description={'SEO (Search Engine Optimization) is the key to enhancing your online presence and driving more traffic to your website. It’s not just about having a website; it’s about ensuring that your site is discoverable and appealing to search engines and users alike.'}
          image={'seoMarketing/hero.webp'}
          color={'bg-gradient-to-r from-[#b0d4d0] to-[#51ae95]'}
          tagContent={'SEO Services'}
          tagColor={'bg-[#b88929]'}
        />
        
        {/* <Services
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'socialMedia/hero.png'}
        /> */}
        <Section
          title={'Master On-Page SEO: Optimize Your Website Content for Maximum Visibility'}
          description={' On-page SEO is crucial for improving your websites search engine rankings and attracting more visitors. By focusing on optimizing website content, you ensure that your site is both user-friendly and search-engine-friendly.'}
          image={'seoMarketing/middle.webp'}
          tagContent={'SEO Services'}
          tagColor={'bg-[#b88929]'}
        />
        {/* <AboutSection /> */}
        <Section
          title={'Boost Your Site’s Authority with Proven Off-Page SEO Strategies'}
          description={'Off-page SEO is essential for establishing your websites credibility and authority in your industry. It involves various tactics that go beyond your website’s content to build trust and recognition online.'}
          image={'seoMarketing/subMiddle.webp'}
          sectionVisible={true}
          imageAlign={'right'}
          tagContent={'SEO Services'}
          tagColor={'bg-[#b88929]'}

        />
         <Section
          title={'Enhance Website Performance with Key Technical SEO Techniques'}
          description={'Technical SEO ensures that your website operates smoothly and is easily accessible to both users and search engines. It focuses on the backend aspects that can impact your sites performance and visibility.'}
          image={'seoMarketing/end.webp'}
          sectionVisible={true}
          tagContent={'SEO Services'}
          tagColor={'bg-[#b88929]'}

        />

      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
