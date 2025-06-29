# Deployment Guide - Vercel

## Persiapan untuk Deploy ke Vercel

### 1. File yang Sudah Disiapkan

✅ `vercel.json` - Konfigurasi Vercel
✅ `package.json` - Updated dengan engines dan scripts
✅ `.gitignore` - Untuk mengabaikan file yang tidak perlu

### 2. Langkah-langkah Deploy

#### A. Melalui Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy dari direktori project**
   ```bash
   vercel
   ```
   
   Ikuti prompt:
   - Set up and deploy? → Y
   - Which scope? → Pilih account Anda
   - Link to existing project? → N
   - Project name → `intip-nilai-anak-unri` (atau nama lain)
   - Directory → `./` (current directory)

4. **Deploy production**
   ```bash
   vercel --prod
   ```

#### B. Melalui GitHub + Vercel Dashboard

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

2. **Connect di Vercel Dashboard**
   - Buka https://vercel.com/dashboard
   - Klik "New Project"
   - Import dari GitHub repository
   - Deploy otomatis

### 3. Environment Variables (Opsional)

Jika diperlukan, tambahkan environment variables di Vercel Dashboard:
- `NODE_ENV=production`
- `PORT=3000` (opsional, Vercel handle otomatis)

### 4. Custom Domain (Opsional)

1. Di Vercel Dashboard → Project Settings → Domains
2. Tambahkan custom domain
3. Update DNS records sesuai instruksi

### 5. Monitoring & Logs

- **Function Logs**: Vercel Dashboard → Project → Functions tab
- **Analytics**: Vercel Dashboard → Project → Analytics tab
- **Performance**: Built-in monitoring tersedia

## Konfigurasi yang Sudah Dibuat

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/app.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "app.js": {
      "maxDuration": 30
    }
  }
}
```

### package.json (Updated)
- ✅ Main entry point: `app.js`
- ✅ Node.js version: `>=18.x`
- ✅ Build scripts untuk Vercel
- ✅ Dependencies yang diperlukan

## Troubleshooting

### Error: Module not found
- Pastikan semua dependencies ada di `package.json`
- Jalankan `npm install` sebelum deploy

### Error: Function timeout
- Increase `maxDuration` di `vercel.json`
- Optimize API calls dan processing

### Error: Static files not found
- Pastikan folder `public` dan `views` ter-commit
- Check `.gitignore` tidak mengabaikan file penting

### Error: API external tidak bisa diakses
- Vercel functions berjalan di serverless environment
- Pastikan API external mendukung CORS
- Check network policies

## Post-Deployment

1. **Test semua fitur**:
   - Form submission
   - PDF viewer
   - Download functionality
   - Responsive design

2. **Monitor performance**:
   - Function execution time
   - Memory usage
   - Error rates

3. **Update domain** (jika ada):
   - Update links di dokumentasi
   - Update social media links

## Commands Cheat Sheet

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Node.js Runtime**: https://vercel.com/docs/functions/serverless-functions/runtimes/node-js
- **Troubleshooting**: https://vercel.com/docs/concepts/errors-and-troubleshooting
