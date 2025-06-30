# 📅 Academic Year Format Update

## ✅ Perubahan yang Dibuat

Aplikasi **Intip Nilai Anak UNRI** telah diupdate untuk menggunakan format tahun akademik yang otomatis dan sesuai dengan sistem pendidikan Indonesia.

## 🎯 Format Tahun Akademik

### Before (Old Format):
- Dropdown: `2024`, `2023`, `2022`, etc.
- Value sent to API: `2024`
- Display: `Tahun: 2024`

### After (New Format):
- Dropdown: `2024/2025`, `2023/2024`, `2022/2023`, etc.
- Value sent to API: `2025` (tahun kedua dari 2024/2025)
- Display: `Tahun Akademik: 2024/2025`

## 🔄 Logika Auto-Update

### JavaScript Logic:
```javascript
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; // 1-12

// Determine current academic year
let academicYear;
if (currentMonth >= 7) {
    // July or later = new academic year
    academicYear = currentYear + 1;
} else {
    // Before July = still current academic year
    academicYear = currentYear;
}
```

### Contoh Perhitungan:
- **Januari 2025**: Academic year = `2024/2025` (value: `2025`)
- **Juli 2025**: Academic year = `2025/2026` (value: `2026`)
- **Desember 2025**: Academic year = `2025/2026` (value: `2026`)

## 📊 Implementation Details

### 1. Frontend (JavaScript)
```javascript
// Generate academic year options
for (let i = 0; i <= 5; i++) {
    const year = academicYear - i;
    const prevYear = year - 1;
    const option = document.createElement('option');
    option.value = year.toString(); // Send year kedua ke server
    option.textContent = `${prevYear}/${year}`; // Display format akademik
}
```

### 2. Backend (Express.js)
```javascript
// Convert year back to academic format for display
const academicYear = `${parseInt(year) - 1}/${year}`;

res.render('result', {
    title: 'Hasil Nilai',
    nim,
    year: academicYear, // Display as 2024/2025
    season,
    pdfData: pdfBase64
});
```

### 3. API Call
```javascript
// API tetap menerima tahun kedua (2025 dari 2024/2025)
const apiUrl = `https://khs.freack21.web.id/?nim=${nim}&year=${year}&season=${season}`;
```

## 🎨 UI Improvements

### Form Updates:
- ✅ Label: `Tahun` → `Tahun Akademik`
- ✅ Placeholder: `Pilih Tahun` → `Pilih Tahun Akademik`
- ✅ Options: Auto-generated berdasarkan tahun saat ini
- ✅ Default: Tahun akademik saat ini terpilih otomatis

### Result Page Updates:
- ✅ Display: `Tahun: 2025` → `📅 Tahun Akademik: 2024/2025`
- ✅ Added emoji untuk visual appeal
- ✅ Consistent academic year format

## 🔧 Technical Benefits

### 1. **Auto-Update**
- Tidak perlu manual update setiap tahun
- Otomatis detect tahun akademik saat ini
- Generate options dinamis

### 2. **User-Friendly**
- Format yang familiar untuk mahasiswa
- Clear indication of academic year
- Intuitive selection

### 3. **Maintainable**
- Single source of truth untuk logika tahun
- Easy to modify academic year start month
- Consistent across application

## 📅 Academic Year Calendar

### Indonesian Academic Year:
- **Semester Ganjil**: Juli - Desember
- **Semester Genap**: Januari - Juni

### Logic Mapping:
```
Jan-Jun 2025 → Academic Year 2024/2025 → API Year: 2025
Jul-Dec 2025 → Academic Year 2025/2026 → API Year: 2026
```

## 🧪 Testing Scenarios

### Test Cases:
1. **Current Month = January**: Should show `2024/2025` as current
2. **Current Month = July**: Should show `2025/2026` as current
3. **API Call**: Should send `2025` for `2024/2025`
4. **Display**: Should show `📅 Tahun Akademik: 2024/2025`

### Manual Testing:
```javascript
// Test in browser console
console.log('Current academic year logic test:');
const testMonths = [1, 6, 7, 12];
testMonths.forEach(month => {
    const year = 2025;
    const academic = month >= 7 ? year + 1 : year;
    console.log(`Month ${month}: ${academic-1}/${academic}`);
});
```

## 🚀 Deployment Ready

### Changes Made:
- ✅ `public/script.js` - Auto-generate academic years
- ✅ `views/index.ejs` - Updated form labels and options
- ✅ `views/result.ejs` - Updated display format
- ✅ `app.js` - Convert year for display
- ✅ Modern PDF viewer design

### Backward Compatibility:
- ✅ API calls remain compatible
- ✅ Database format unchanged
- ✅ URL parameters consistent

## 🎯 Result

Aplikasi sekarang menggunakan format tahun akademik yang:
- **Otomatis**: Update setiap tahun tanpa manual intervention
- **Akurat**: Sesuai dengan kalender akademik Indonesia
- **User-friendly**: Format yang familiar untuk mahasiswa
- **Maintainable**: Easy to modify dan extend

**Example Flow:**
1. User sees: `2024/2025` in dropdown
2. User selects: `2024/2025`
3. API receives: `year=2025`
4. Result shows: `📅 Tahun Akademik: 2024/2025`

Perfect! 🎉
