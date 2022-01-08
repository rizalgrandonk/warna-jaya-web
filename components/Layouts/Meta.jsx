import Head from "next/head";

const Meta = () => {

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
      <link rel="manifest" href="/icons/site.webmanifest"/>
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
      <link rel="shortcut icon" href="/icons/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"></meta>

      <title>Warna Jaya Surabaya</title>
      <meta property="og:title" content="Warna Jaya Surabaya" />
      <meta name="twitter:title" content="Warna Jaya Surabaya" />

      <meta name="keywords" content="warna, warna jaya, warna jaya surabaya, surabaya warna, surabaya" />
      <link rel="canonical" href="https://warna-jaya.netlify.app/" />

      <meta
        name="description"
        content="Leading Supplier of High Quality Colors & Chemicals in Indonesia and beyond"
      />
      <meta
        property="og:description"
        content="Leading Supplier of High Quality Colors & Chemicals in Indonesia and beyond"
      />
      <meta
        name="twitter:description"
        content="Leading Supplier of High Quality Colors & Chemicals in Indonesia and beyond"
      />

      <meta property="og:url" content="https://warna-jaya.netlify.app/" />
      <meta property="og:site_name" content="Warna Jaya Surabaya" />

      <meta name="image" content="/images/bg-1.jpg" />
      <meta property="og:image" content="/images/bg-1.jpg" />
      <meta name="twitter:image" content="/images/bg-1.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;