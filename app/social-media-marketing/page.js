"use client"

import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


import Footer from "@/components/footer";
import FooterCard from "@/components/footercard";

export default function SocialMediaMarketing() {
  const testimonials = [
    {
      testimonial: 'This is my first time working with a marketing company and I had a fantastic experience. Business is doing better than ever and I am very grateful for Toolaf. Highly recommend!',
      author: 'Pavel Solomin',
      position: 'Founder Net ABC',
    },
    {
      testimonial: 'This is my first time working with a marketing xxx grateful for Toolaf. Highly recommend!',
      author: 'Pavel Solomin',
      position: 'Founder Net ABC',
    },
    {
      testimonial: 'This is my first time working with a marketing company and I had a fantastic experience',
      author: 'Pavel Solomin',
      position: 'Founder Net ABC',
    },
    // Add more testimonials as needed
  ];
  return (
    <>




      <div className="md:p-6 p-3  bg-[#b0d4d0]">

        <Navbar />
        <HeroSection
          title={'Boost Your Growth with Our All-in-One Social Media Marketing Platform'}
          description={'We aren &apos t your average, run-of-the-mill website designer—our services pack a serious punch. We are a digital agency for websites that achieve goals.'}
          image={'socialMedia/sm2.png'}
        />
        <Services />
        <AboutSection />
        <div className="App">

          <header className="bg-white text-center py-1">
            <div
              className="mt-14 bg-yellow-500 "
              style={{
                width: 'fit-content',
                padding: '5px',
                borderRadius: '15px',
                margin: 'auto'
              }}>
              <p className="text-gray-700 font-bold text-sm">Our Testimonials</p>
            </div>
          </header>
          {/* <main className="p-4 "> */}
          <Carousel cards={testimonials} />
          {/* </main> */}
        </div>
      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
