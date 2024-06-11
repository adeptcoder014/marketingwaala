"use client"

import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
// import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Footer from "@/components/footer";
import FooterCard from "@/components/footercard";

export default function Home() {
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
      <Head>

        <Script
          id="gtag-init"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JSJSP7F')`}} />


        <title>MW</title>
        <meta name="description" content="MW" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>


      <div className="p-10 bg-[#b0d4d0]">

        <Navbar />
        <HeroSection />
        <Services />
        <AboutSection />
        <body className="App">
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JSJSP7F"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
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
        </body>
      </div>

      <FooterCard />
      <Footer />
    </>
  );
}
