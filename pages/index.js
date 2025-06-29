import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const [formData, setFormData] = useState({
    nim: '',
    year: '2024',
    season: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validasi
    if (!formData.nim || !formData.year || !formData.season) {
      setError('Semua field harus diisi!');
      setLoading(false);
      return;
    }

    if (!/^\d+$/.test(formData.nim)) {
      setError('NIM harus berupa angka!');
      setLoading(false);
      return;
    }

    if (formData.nim.length < 8) {
      setError('NIM minimal 8 digit!');
      setLoading(false);
      return;
    }

    // Redirect ke halaman result dengan query params
    router.push({
      pathname: '/result',
      query: formData
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Head>
        <title>Intip Nilai Anak UNRI</title>
        <meta name="description" content="Website untuk mengambil dan menampilkan KHS mahasiswa UNRI" />
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
              <Image src="/icon.png" alt="Icon" width={35} height={35} priority />
            </div>
            <h1>Intip Nilai Anak UNRI</h1>
            <p>Masukkan data untuk mengambil nilai KHS😏😎</p>
          </div>

          {error && (
            <div className="alert alert-error">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="nim">
                <i className="fas fa-id-card"></i>
                NIM (Nomor Induk Mahasiswa)
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                value={formData.nim}
                onChange={handleChange}
                placeholder="Contoh: 2202124***"
                required
                pattern="[0-9]+"
                title="NIM harus berupa angka"
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">
                <i className="fas fa-calendar-alt"></i>
                Tahun
              </label>
              <select 
                id="year" 
                name="year" 
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="season">
                <i className="fas fa-calendar"></i>
                Semester
              </label>
              <select 
                id="season" 
                name="season" 
                value={formData.season}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Semester</option>
                <option value="1">Semester 1 (Ganjil)</option>
                <option value="2">Semester 2 (Genap)</option>
              </select>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-search'}`}></i>
              {loading ? 'Mengambil data...' : 'Ambil Nilai KHS'}
            </button>
          </form>

          <center>
            <p style={{fontSize: '0.8rem', color: '#ffffff', marginTop: '20px'}}>
              💻 By Freack & Gum ✨
            </p>
          </center>
        </div>
      </div>
    </>
  );
}
