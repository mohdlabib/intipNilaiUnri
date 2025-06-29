# Intip Nilai Anak UNRI

Website modern dan minimalis untuk mengambil dan menampilkan Kartu Hasil Studi (KHS) mahasiswa Universitas Riau melalui API.

## Fitur

- **Desain Modern & Minimalis**: Interface cantik dengan warna FFA673 yang menonjol
- **Style Cartoon/Ilustrasi**: Desain yang friendly dan menarik
- **Fully Responsive**: Optimal untuk mobile, tablet, dan desktop
- **Container System**: Layout yang rapi dengan container terstruktur
- **Halaman Input**: Form untuk memasukkan NIM, tahun, dan semester
- **Halaman Hasil**: Menampilkan PDF KHS dengan viewer interaktif
- **PDF Viewer**: Navigasi halaman, zoom in/out, download PDF
- **Animasi Smooth**: Transisi dan animasi yang halus
- **Typography**: Font Poppins yang modern dan readable
- **Error Handling**: Penanganan error yang user-friendly

## Teknologi

- **Backend**: Node.js dengan Express.js
- **Template Engine**: EJS
- **PDF Viewer**: PDF.js
- **Styling**: CSS3 dengan animasi modern, gradients, dan backdrop-filter
- **Typography**: Inter font untuk tampilan modern
- **Icons**: Font Awesome + custom icon
- **Color Scheme**: FFA673 (Orange) sebagai warna utama

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
