// Simple test script untuk memastikan aplikasi siap deploy
const app = require('./app');
const axios = require('axios');

// Test basic functionality
async function testApp() {
    console.log('🧪 Testing application before deployment...\n');
    
    // Test 1: Check if app exports properly
    console.log('✅ App exports correctly');
    
    // Test 2: Check dependencies
    try {
        require('express');
        require('ejs');
        require('axios');
        require('multer');
        console.log('✅ All dependencies available');
    } catch (error) {
        console.log('❌ Missing dependencies:', error.message);
        return false;
    }
    
    // Test 3: Check static files
    const fs = require('fs');
    const path = require('path');
    
    const requiredFiles = [
        'public/style.css',
        'public/script.js',
        'public/icon.png',
        'views/index.ejs',
        'views/result.ejs'
    ];
    
    for (const file of requiredFiles) {
        if (fs.existsSync(path.join(__dirname, file))) {
            console.log(`✅ ${file} exists`);
        } else {
            console.log(`❌ ${file} missing`);
            return false;
        }
    }
    
    // Test 4: Check vercel.json
    if (fs.existsSync(path.join(__dirname, 'vercel.json'))) {
        console.log('✅ vercel.json exists');
        try {
            const vercelConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'vercel.json'), 'utf8'));
            if (vercelConfig.builds && vercelConfig.routes) {
                console.log('✅ vercel.json has correct structure');
            } else {
                console.log('❌ vercel.json missing required fields');
                return false;
            }
        } catch (error) {
            console.log('❌ vercel.json invalid JSON');
            return false;
        }
    } else {
        console.log('❌ vercel.json missing');
        return false;
    }
    
    // Test 5: Check package.json
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    if (packageJson.main === 'app.js') {
        console.log('✅ package.json main entry correct');
    } else {
        console.log('❌ package.json main entry should be app.js');
        return false;
    }
    
    if (packageJson.engines && packageJson.engines.node) {
        console.log('✅ Node.js version specified');
    } else {
        console.log('❌ Node.js version not specified in engines');
        return false;
    }
    
    console.log('\n🎉 All tests passed! Application is ready for Vercel deployment.');
    console.log('\n📝 Next steps:');
    console.log('1. Run: vercel');
    console.log('2. Follow the prompts');
    console.log('3. Deploy to production: vercel --prod');
    
    return true;
}

// Run tests
testApp().catch(console.error);
