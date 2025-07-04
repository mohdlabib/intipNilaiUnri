const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;



// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Intip Nilai Anak UNRI',
        error: null 
    });
});

app.post('/get-nilai', async (req, res) => {
    try {
        const { nim, year, season } = req.body;
        
        // Validasi input
        if (!nim || !year || !season) {
            return res.render('index', {
                title: 'Intip Nilai Anak UNRI',
                error: 'Semua field harus diisi!'
            });
        }

        // Call API
        const apiUrl = `https://khs.freack21.web.id/?nim=${nim}&year=${year}&season=${season}`;
        console.log('Calling API:', apiUrl);
        console.log('Received year from form:', year, typeof year);
        
        const response = await axios.get(apiUrl, {
            timeout: 15000, // Increased timeout for Vercel
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

            // Convert year back to academic year format for display
            const academicYear = `${year}/${parseInt(year) + 1}`;
            console.log('Academic year for display:', academicYear);

            res.render('result', {
                title: 'Hasil Nilai',
                nim,
                year: academicYear,
                season,
                pdfData: pdfBase64,
                error: null
            });
        } else {
            // Handle non-PDF response
            const academicYear = `${year}/${parseInt(year) + 1}`;
            res.render('result', {
                title: 'Hasil Nilai',
                nim,
                year: academicYear,
                season,
                pdfData: null,
                error: 'Response bukan file PDF. Mungkin data tidak ditemukan.',
                responseData: response.data
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

        res.render('index', {
            title: 'Intip Nilai Anak UNRI',
            error: errorMessage
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
