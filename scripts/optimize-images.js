/**
 * Image Optimization Script
 * This script helps convert PNG images to WebP format for better performance
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Requirements: Install sharp
 * npm install sharp --save-dev
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const FEATURES_DIR = path.join(PUBLIC_DIR, 'assets', 'features');

// Configuration
const CONFIG = {
  webp: {
    quality: 80,
    effort: 6, // 0-6, higher = better compression but slower
  },
  png: {
    quality: 75,
    compressionLevel: 9,
  },
  avif: {
    quality: 70,
    effort: 6,
  }
};

async function convertToWebP(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`Converting ${path.basename(inputPath)} (${sizeMB} MB)...`);
    
    await sharp(inputPath)
      .webp(CONFIG.webp)
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ Created ${path.basename(outputPath)} (${newSizeMB} MB) - Saved ${saved}%`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function convertToAVIF(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`Converting ${path.basename(inputPath)} to AVIF (${sizeMB} MB)...`);
    
    await sharp(inputPath)
      .avif(CONFIG.avif)
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ Created ${path.basename(outputPath)} (${newSizeMB} MB) - Saved ${saved}%`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function optimizePNG(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`Optimizing ${path.basename(inputPath)} (${sizeMB} MB)...`);
    
    await sharp(inputPath)
      .png(CONFIG.png)
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ Optimized ${path.basename(outputPath)} (${newSizeMB} MB) - Saved ${saved}%`);
    return true;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dirPath) {
  console.log(`\n📁 Processing directory: ${dirPath}\n`);
  
  if (!fs.existsSync(dirPath)) {
    console.error(`❌ Directory not found: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
  
  if (pngFiles.length === 0) {
    console.log('No PNG files found.');
    return;
  }
  
  console.log(`Found ${pngFiles.length} PNG file(s)\n`);
  
  for (const file of pngFiles) {
    const inputPath = path.join(dirPath, file);
    const basename = path.parse(file).name;
    
    // Convert to WebP
    const webpPath = path.join(dirPath, `${basename}.webp`);
    await convertToWebP(inputPath, webpPath);
    
    // Optionally convert to AVIF (even better compression)
    const avifPath = path.join(dirPath, `${basename}.avif`);
    await convertToAVIF(inputPath, avifPath);
    
    console.log('');
  }
}

async function main() {
  console.log('🚀 Image Optimization Script\n');
  console.log('='.repeat(50));
  
  try {
    // Check if sharp is installed
    try {
      require.resolve('sharp');
    } catch (e) {
      console.error('\n❌ Error: sharp is not installed.');
      console.error('Please run: npm install sharp --save-dev\n');
      process.exit(1);
    }
    
    // Process features directory
    await processDirectory(FEATURES_DIR);
    
    console.log('\n' + '='.repeat(50));
    console.log('✅ Optimization complete!\n');
    console.log('Next steps:');
    console.log('1. Update image references in your components to use .webp files');
    console.log('2. Test the application to ensure images load correctly');
    console.log('3. Consider removing the original PNG files to save space');
    console.log('4. Run Lighthouse to verify performance improvements\n');
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  }
}

main();
