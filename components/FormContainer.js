import { useState } from 'react'

export default function FormContainer({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    nim: '',
    year: new Date().getFullYear().toString(),
    season: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Validasi NIM hanya angka
    if (name === 'nim') {
      const numericValue = value.replace(/[^0-9]/g, '')
      setFormData(prev => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validasi
    if (!formData.nim || !formData.year || !formData.season) {
      alert('Semua field harus diisi!')
      return
    }

    if (formData.nim.length < 8) {
      alert('NIM minimal 8 digit!')
      return
    }

    onSubmit(formData)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
            placeholder="Contoh: 2202135689"
            required
            disabled={loading}
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
            disabled={loading}
          >
            <option value="">Pilih Tahun</option>
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
            disabled={loading}
          >
            <option value="">Pilih Semester</option>
            <option value="1">Semester 1 (Ganjil)</option>
            <option value="2">Semester 2 (Genap)</option>
          </select>
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          <i className={loading ? "fas fa-spinner fa-spin" : "fas fa-search"}></i>
          {loading ? 'Memproses...' : 'Ambil Nilai KHS'}
        </button>
      </form>
    </div>
  )
}
