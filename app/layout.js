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



      </Head>

      <Script
        id="gtag-init"
        type="text/javascript"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WC63RJLL')`}} />
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC63RJLL"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}

