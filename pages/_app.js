import Script from 'next/script';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Vanshika" />
        <meta property="og:description" content="Happy Birthday Vanshika" />
        <meta property="og:image" content="https://vanshika-birthday.vercel.app/images/og-image.png" />
      </Head>

      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;