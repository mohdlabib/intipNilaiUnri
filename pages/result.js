import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Alert from '../components/Alert'
import PDFViewer from '../components/PDFViewer'

export default function Result() {
  const router = useRouter()
  const { nim, year, season, success } = router.query
  const [pdfData, setPdfData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (router.isReady && success === 'true') {
      fetchPDF()
    } else if (router.isReady && !success) {
      router.push('/')
    }
  }, [router.isReady, success])

  const fetchPDF = async () => {
    try {
      const response = await fetch('/api/get-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nim, year, season }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Gagal mengambil PDF')
      }

      setPdfData(result.pdfData)
    } catch (error) {
      console.error('Error:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!router.isReady) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Hasil Nilai - Intip Nilai Anak UNRI</title>
      </Head>
      
      <div className="container">
        <div className="content-wrapper">
          <Header 
            title="Hasil Nilai"
            subtitle={`NIM: ${nim} | Tahun: ${year} | Semester: ${season}`}
            icon="fas fa-file-pdf"
          />

          <div className="action-buttons">
            <a href="/" className="btn btn-secondary">
              <i className="fas fa-arrow-left"></i>
              Kembali
            </a>
            {pdfData && (
              <button onClick={() => downloadPDF()} className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download PDF
              </button>
            )}
          </div>

          {error && <Alert type="error" message={error} />}

          {loading && (
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i>
              Memuat PDF...
            </div>
          )}

          {pdfData && <PDFViewer pdfData={pdfData} nim={nim} year={year} season={season} />}
        </div>
      </div>
    </>
  )

  function downloadPDF() {
    const link = document.createElement('a')
    link.href = 'data:application/pdf;base64,' + pdfData
    link.download = `KHS_${nim}_${year}_${season}.pdf`
    link.click()
  }
}
