# 🎓 Intip Nilai Anak UNRI

Website modern untuk mengambil dan menampilkan KHS (Kartu Hasil Studi) mahasiswa UNRI. Dibangun dengan **Next.js** untuk performa optimal dan pengalaman pengguna yang luar biasa.

## ✨ Fitur

### 🎨 Design & UI
- **Modern Next.js Architecture**: React components dengan SSR
- **Responsive Design**: Optimal untuk mobile, tablet, dan desktop
- **Minimalist Interface**: Warna FFA673 yang eye-catching
- **Smooth Animations**: Transisi dan hover effects yang halus
- **Typography**: Font Poppins yang modern dan readable

### 🚀 Functionality
- **Form Input**: Validasi NIM, tahun, dan semester
- **API Integration**: Koneksi ke external KHS service
- **PDF Viewer**: Interactive PDF.js dengan navigasi
- **Download Feature**: Download PDF hasil KHS
- **Error Handling**: User-friendly error messages
- **Loading States**: Real-time feedback untuk user

### ⚡ Performance
- **Next.js Optimization**: Automatic code splitting
- **Fast Loading**: Optimized images dan assets
- **SEO Ready**: Meta tags dan structured data
- **Production Ready**: Built for Vercel deployment

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: CSS3 dengan Custom Properties
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)
- **PDF Viewer**: PDF.js

### Backend
- **Runtime**: Node.js
- **API Routes**: Next.js API Routes
- **HTTP Client**: Axios
- **Deployment**: Vercel (optimized)

### Development
- **Package Manager**: npm
- **Linting**: ESLint
- **Hot Reload**: Next.js Fast Refresh

## Instalasi

1. Clone atau download repository ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm start
   ```
4. Buka browser dan akses `http://localhost:3000`

## Penggunaan

1. **Halaman Input**:
   - Masukkan NIM (Nomor Induk Mahasiswa)
   - Pilih tahun akademik
   - Pilih semester (1 untuk ganjil, 2 untuk genap)
   - Klik "Ambil Nilai KHS"

2. **Halaman Hasil**:
   - PDF KHS akan ditampilkan dengan viewer interaktif
   - Gunakan tombol navigasi untuk berpindah halaman
   - Gunakan tombol zoom untuk memperbesar/memperkecil
   - Klik "Download PDF" untuk mengunduh file

## API Endpoint

Aplikasi ini menggunakan API eksternal:
```
https://khs.freack21.web.id/?nim={NIM}&year={YEAR}&season={SEASON}
```

Parameter:
- `nim`: Nomor Induk Mahasiswa
- `year`: Tahun akademik (contoh: 2024)
- `season`: Semester (1 atau 2)

## Struktur File

```
├── app.js              # Server Express utama
├── package.json        # Konfigurasi Node.js
├── views/
│   ├── index.ejs      # Halaman form input
│   └── result.ejs     # Halaman hasil dengan PDF viewer
├── public/
│   ├── style.css      # Styling CSS
│   └── script.js      # JavaScript client-side
└── README.md          # Dokumentasi
```

## Fitur PDF Viewer

- **Navigasi**: Tombol previous/next untuk berpindah halaman
- **Zoom**: Tombol zoom in/out untuk mengatur ukuran tampilan
- **Download**: Tombol download untuk menyimpan PDF
- **Keyboard Shortcuts**:
  - `←` / `→`: Navigasi halaman
  - `+` / `-`: Zoom in/out

## Error Handling

Aplikasi menangani berbagai jenis error:
- Koneksi timeout
- Server tidak tersedia
- Data tidak ditemukan
- Format response yang tidak valid
- Validasi input yang salah

## Customization

### Mengubah Port
Edit file `app.js` dan ubah nilai `PORT`:
```javascript
const PORT = process.env.PORT || 3000;
```

### Mengubah Styling
Edit file `public/style.css` untuk menyesuaikan tampilan.

### Menambah Validasi
Edit file `public/script.js` untuk menambah validasi client-side.

## Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Troubleshooting

### Server tidak bisa diakses
- Pastikan port 3000 tidak digunakan aplikasi lain
- Cek firewall dan antivirus

### PDF tidak tampil
- Pastikan koneksi internet stabil
- Cek apakah API eksternal dapat diakses
- Periksa console browser untuk error JavaScript

### Error saat install dependencies
- Pastikan Node.js versi 14+ terinstall
- Hapus folder `node_modules` dan file `package-lock.json`, lalu jalankan `npm install` lagi

## Lisensi

MIT License

## Kontribusi

Silakan buat issue atau pull request untuk perbaikan dan penambahan fitur.
