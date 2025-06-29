import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nim, year, season } = req.body;

    // Validasi input
    if (!nim || !year || !season) {
      return res.status(400).json({ 
        success: false, 
        error: 'Semua field harus diisi!' 
      });
    }

    // Call external API
    const apiUrl = `https://khs.freack21.web.id/?nim=${nim}&year=${year}&season=${season}`;
    console.log('Calling API:', apiUrl);

    const response = await axios.get(apiUrl, {
      timeout: 15000,
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/pdf,*/*'
      }
    });

    // Check if response is PDF
    const contentType = response.headers['content-type'];

    if (contentType && contentType.includes('application/pdf')) {
      // Convert PDF to base64
      const pdfBuffer = Buffer.from(response.data);
      const pdfBase64 = pdfBuffer.toString('base64');

      res.status(200).json({
        success: true,
        pdfData: pdfBase64
      });
    } else {
      res.status(400).json({
        success: false,
        error: 'Response bukan file PDF. Mungkin data tidak ditemukan.'
      });
    }

  } catch (error) {
    console.error('Error:', error.message);

    let errorMessage = 'Terjadi kesalahan saat mengambil data.';

    if (error.code === 'ENOTFOUND') {
      errorMessage = 'Tidak dapat terhubung ke server API.';
    } else if (error.response) {
      errorMessage = `Server error: ${error.response.status}`;
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout. Coba lagi nanti.';
    }

    res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
}
