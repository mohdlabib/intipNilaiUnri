import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import FormContainer from '../components/FormContainer'
import Alert from '../components/Alert'

export default function Home() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (formData) => {
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('/api/get-nilai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Terjadi kesalahan')
      }

      // Redirect to result page with data
      router.push({
        pathname: '/result',
        query: {
          nim: formData.nim,
          year: formData.year,
          season: formData.season,
          success: 'true'
        }
      })

    } catch (error) {
      console.error('Error:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Intip Nilai Anak UNRI</title>
      </Head>

      <div className="container">
        <div className="content-wrapper">
          <Header
            title="Intip Nilai Anak UNRI"
            subtitle="Masukkan data untuk mengambil nilai KHS"
            icon="/icon.png"
          />

          {error && <Alert type="error" message={error} />}

          <FormContainer onSubmit={handleSubmit} loading={loading} />

          <center>
            <p style={{ fontSize: '0.8rem', color: '#ffffff', marginTop: '20px' }}>
              💻 By Freack & Gum ✨
            </p>
          </center>
        </div>
      </div>
    </>
  )
}
