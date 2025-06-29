import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website untuk mengambil dan menampilkan KHS mahasiswa UNRI" />
        <meta name="keywords" content="KHS, UNRI, nilai, mahasiswa, kartu hasil studi" />
        <meta name="author" content="Freack & Gum" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="preload" href="/icon.png" as="image" type="image/png" />
        <link rel="prefetch" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
