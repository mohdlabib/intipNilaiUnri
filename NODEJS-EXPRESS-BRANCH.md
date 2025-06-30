# 🚀 Node.js Express Branch

## ✅ Successfully Restored to Express.js

Aplikasi **Intip Nilai Anak UNRI** telah berhasil dikembalikan ke versi Node.js Express.js dan diupload ke branch terpisah `nodejs-express`.

## 📁 Project Structure (Express.js)

```
├── app.js                  # Main Express.js server
├── package.json            # Dependencies & scripts
├── vercel.json            # Vercel deployment config
├── views/
│   ├── index.ejs          # Homepage template
│   └── result.ejs         # Result page template
├── public/
│   ├── style.css          # Complete CSS styles
│   ├── script.js          # Client-side JavaScript
│   └── icon.png           # App icon
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

### Backend
- **Framework**: Express.js 5.1.0
- **Template Engine**: EJS 3.1.10
- **HTTP Client**: Axios 1.10.0
- **File Upload**: Multer 2.0.1
- **Runtime**: Node.js >=18.x

### Frontend
- **Styling**: Pure CSS3 with modern features
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)
- **PDF Viewer**: PDF.js integration

## 🎯 Features

### ✅ Core Functionality
- **Form Input**: NIM, tahun, semester validation
- **API Integration**: External KHS service call
- **PDF Processing**: Convert response to base64
- **PDF Viewer**: Interactive PDF.js viewer
- **Download**: PDF download functionality
- **Error Handling**: User-friendly error messages

### ✅ Design & UI
- **Modern Design**: Minimalist dengan warna FFA673
- **Responsive**: Mobile, tablet, desktop support
- **Smooth Animations**: CSS transitions dan hover effects
- **Glass Effects**: Subtle backdrop-filter effects
- **Typography**: Poppins font yang modern

### ✅ Performance
- **Fast Loading**: Optimized static assets
- **Efficient Routing**: Simple Express.js routes
- **Error Recovery**: Robust error handling
- **Production Ready**: Vercel deployment config

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start
# or
npm run dev

# Test application
npm test
```

## 🌐 Deployment

### Vercel Configuration
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
  "functions": {
    "app.js": {
      "maxDuration": 30
    }
  }
}
```

### Deploy to Vercel
```bash
# Deploy preview
vercel

# Deploy production
vercel --prod
```

## 📊 Branch Comparison

### Main Branch (Next.js)
- ✅ React components
- ✅ SSR/SSG capabilities
- ✅ Automatic optimization
- ✅ Modern development experience

### nodejs-express Branch (Express.js)
- ✅ Simple server setup
- ✅ Traditional templating (EJS)
- ✅ Direct control over routing
- ✅ Lightweight and fast

## 🔧 Key Files

### app.js
```javascript
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
    // API call and PDF processing logic
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

### package.json
```json
{
  "name": "intipnilaianakunri",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "node app.js"
  },
  "dependencies": {
    "axios": "^1.10.0",
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "multer": "^2.0.1"
  }
}
```

## 🎨 Styling

### Complete CSS Features
- **Modern Gradients**: Linear dan radial gradients
- **Backdrop Filters**: Glass morphism effects
- **Smooth Animations**: CSS keyframes
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Hover states dan transitions

## 🧪 Testing

### Manual Testing Checklist
- ✅ Homepage loads correctly
- ✅ Form validation works
- ✅ API integration functional
- ✅ PDF viewer displays correctly
- ✅ Download feature works
- ✅ Responsive design on all devices
- ✅ Error handling displays properly

## 📝 Usage

1. **Access Homepage**: Navigate to `/`
2. **Fill Form**: Enter NIM, year, semester
3. **Submit**: Click "Ambil Nilai KHS"
4. **View Results**: PDF displays with controls
5. **Download**: Click download button for PDF

## 🔗 Branch Links

- **Main Branch (Next.js)**: `main`
- **Express.js Branch**: `nodejs-express` ← Current branch

## 🎉 Ready for Production!

Your Express.js application is now:
- ✅ Fully functional
- ✅ Production ready
- ✅ Deployed to separate branch
- ✅ Vercel deployment configured
- ✅ All features working

**Branch URL**: `https://github.com/mohdlabib/intipNilaiUnri/tree/nodejs-express`
