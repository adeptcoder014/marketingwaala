"use client"

import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


import Footer from "@/components/footer";
import FooterCard from "@/components/footercard";

export default function Home() {

  return (
    <>
    



    <div className="md:p-6 p-3  bg-[#b0d4d0]">

        <Navbar />
        <HeroSection />
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
