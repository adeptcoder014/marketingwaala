 import { Inter } from "next/font/google";
import "./globals.css";
// import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MW",
  description: "marketing waala ",
};

export default function RootLayout({ children }) {
  return (




    <html lang="en">
      <Head>


<title>MW</title>
<meta name="description" content="MW" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />

<Script
  id="gtag-init"
  type="text/javascript"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JSJSP7F')`}}>

</Script>
</Head>
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
