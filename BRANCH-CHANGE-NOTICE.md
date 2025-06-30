# 🔄 Branch Change Notice

## ✅ Default Branch Changed Successfully

Repository **intipNilaiUnri** telah berhasil diubah default branch-nya dari `main` ke `nodejs-express`.

## 📊 Branch Status

### Before:
- **Default Branch**: `main` (Next.js version)
- **Secondary Branch**: `nodejs-express` (Express.js version)

### After:
- **Default Branch**: `nodejs-express` (Express.js version) ← **PRIMARY**
- **Secondary Branch**: `main` (Next.js version)

## 🎯 What This Means

### 1. **Repository Access**
- ✅ `https://github.com/mohdlabib/intipNilaiUnri` now shows Express.js version
- ✅ Clone/download will get Express.js version by default
- ✅ New contributors will see Express.js as main codebase

### 2. **Deployment Impact**
- ✅ Vercel auto-deploy will use `nodejs-express` branch
- ✅ Production URL will serve Express.js application
- ✅ All new deployments default to Express.js

### 3. **Development Workflow**
- ✅ `git clone` gets Express.js version
- ✅ Pull requests default to `nodejs-express` branch
- ✅ Issues and discussions reference Express.js version

## 🛠️ Technical Details

### Repository Configuration:
```json
{
  "name": "intipNilaiUnri",
  "default_branch": "nodejs-express",
  "language": "CSS",
  "homepage": "https://intip-nilai-unri.vercel.app"
}
```

### Branch Comparison:

#### `nodejs-express` (PRIMARY)
- **Framework**: Express.js + EJS
- **Features**: 
  - ✅ Academic year format (2024/2025)
  - ✅ Modern PDF viewer
  - ✅ Responsive design
  - ✅ Glass morphism effects
- **Deployment**: Vercel-ready
- **Status**: Production-ready

#### `main` (SECONDARY)
- **Framework**: Next.js + React
- **Features**:
  - ✅ React components
  - ✅ SSR capabilities
  - ✅ Modern development experience
- **Status**: Alternative implementation

## 🚀 For Developers

### Clone Repository:
```bash
git clone https://github.com/mohdlabib/intipNilaiUnri.git
cd intipNilaiUnri
# You're now on nodejs-express branch by default
```

### Switch Between Branches:
```bash
# Work on Express.js version (default)
git checkout nodejs-express

# Switch to Next.js version
git checkout main
```

### Development Commands:
```bash
# Express.js version
npm install
npm start

# Next.js version (if on main branch)
npm install
npm run dev
```

## 🌐 URLs

### Repository:
- **Main URL**: https://github.com/mohdlabib/intipNilaiUnri
- **Express.js Branch**: https://github.com/mohdlabib/intipNilaiUnri/tree/nodejs-express
- **Next.js Branch**: https://github.com/mohdlabib/intipNilaiUnri/tree/main

### Deployment:
- **Production**: https://intip-nilai-unri.vercel.app (Express.js)
- **Alternative**: Available for Next.js deployment if needed

## 📝 Migration Notes

### For Existing Developers:
1. **Update local repository**:
   ```bash
   git fetch origin
   git checkout nodejs-express
   git pull origin nodejs-express
   ```

2. **Update remote tracking**:
   ```bash
   git branch --set-upstream-to=origin/nodejs-express nodejs-express
   ```

### For New Contributors:
- Default clone will get Express.js version
- Follow Express.js development guidelines
- Refer to `NODEJS-EXPRESS-BRANCH.md` for setup

## 🎯 Benefits

### 1. **Simplified Workflow**
- Single primary codebase
- Clear development direction
- Reduced confusion for contributors

### 2. **Production Focus**
- Express.js is the production version
- Optimized for deployment
- Stable and tested

### 3. **Better Organization**
- Clear separation of implementations
- Easy to maintain both versions
- Flexible for future decisions

## ✅ Verification

To verify the change:
1. Visit: https://github.com/mohdlabib/intipNilaiUnri
2. Check that default branch shows `nodejs-express`
3. Verify file structure shows Express.js files (`app.js`, `views/`, etc.)

## 🎉 Complete!

Repository **intipNilaiUnri** now uses **Express.js** as the primary implementation with modern features:
- 📅 Academic year format
- 🎨 Modern PDF viewer
- 📱 Responsive design
- 🚀 Production-ready

The change is effective immediately! 🎯
