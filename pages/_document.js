import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website untuk mengambil dan menampilkan KHS mahasiswa UNRI" />
        <meta name="keywords" content="KHS, UNRI, nilai, mahasiswa, kartu hasil studi" />
        <meta name="author" content="Freack & Gum" />
      </Head>
      <body>
        {/* Floating decorative shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
