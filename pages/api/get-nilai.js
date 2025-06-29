export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { nim, year, season } = req.body

  // Validasi input
  if (!nim || !year || !season) {
    return res.status(400).json({ error: 'Semua field harus diisi!' })
  }

  // Validasi format NIM
  if (!/^\d+$/.test(nim) || nim.length < 8) {
    return res.status(400).json({ error: 'NIM harus berupa angka minimal 8 digit!' })
  }

  try {
    // Hanya validasi input, PDF akan diambil di endpoint terpisah
    res.status(200).json({ 
      success: true, 
      message: 'Data valid',
      nim,
      year,
      season
    })

  } catch (error) {
    console.error('Error:', error.message)
    
    let errorMessage = 'Terjadi kesalahan saat memvalidasi data.'
    
    res.status(500).json({ error: errorMessage })
  }
}
