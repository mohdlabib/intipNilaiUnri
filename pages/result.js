import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Result() {
  const router = useRouter();
  const { nim, year, season } = router.query;
  const [pdfData, setPdfData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nim && year && season) {
      fetchPDF();
    }
  }, [nim, year, season]);

  const fetchPDF = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/get-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nim, year, season }),
      });

      const data = await response.json();

      if (data.success) {
        setPdfData(data.pdfData);
      } else {
        setError(data.error || 'Terjadi kesalahan saat mengambil data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    if (pdfData) {
      const link = document.createElement('a');
      link.href = 'data:application/pdf;base64,' + pdfData;
      link.download = `KHS_${nim}_${year}_${season}.pdf`;
      link.click();
    }
  };

  return (
    <>
      <Head>
        <title>Hasil Nilai - Intip Nilai Anak UNRI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* Floating decorative shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <div className="container">
        <div className="content-wrapper">
          <div className="header">
            <div className="header-icon">
              <i className="fas fa-file-pdf" style={{color: 'white', fontSize: '1.8rem'}}></i>
            </div>
            <h1>Hasil Nilai</h1>
            <p>NIM: {nim} | Tahun: {year} | Semester: {season}</p>
          </div>

          <div className="action-buttons">
            <Link href="/" className="btn btn-secondary">
              <i className="fas fa-arrow-left"></i>
              Kembali
            </Link>
            {pdfData && (
              <button onClick={downloadPDF} className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download PDF
              </button>
            )}
          </div>

          {error && (
            <div className="alert alert-error">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </div>
          )}

          {loading && (
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i>
              Memuat PDF...
            </div>
          )}

          {pdfData && !loading && (
            <div className="pdf-container">
              <div className="pdf-viewer">
                <iframe
                  src={`data:application/pdf;base64,${pdfData}`}
                  width="100%"
                  height="600px"
                  style={{border: 'none', borderRadius: '15px'}}
                  title="PDF Viewer"
                />
              </div>
            </div>
          )}

          <center>
            <p style={{fontSize: '0.8rem', color: '#ffffff', marginTop: '20px'}}>
              By Freack & Gum
            </p>
          </center>
        </div>
      </div>
    </>
  );
}
