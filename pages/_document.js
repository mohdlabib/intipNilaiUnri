import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website untuk mengambil dan menampilkan KHS mahasiswa UNRI" />
        <meta name="keywords" content="KHS, UNRI, nilai, mahasiswa, kartu hasil studi" />
        <meta name="author" content="Freack & Gum" />
        <link rel="icon" href="/icon.png" />
        <link rel="preload" href="/icon.png" as="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
