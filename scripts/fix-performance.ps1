# Performance Optimization Script for Windows
# This script fixes dependency issues and installs optimized packages

Write-Host "🚀 Starting Performance Optimization..." -ForegroundColor Green
Write-Host ""

Write-Host "Step 1: Removing old dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
}

Write-Host ""
Write-Host "Step 2: Installing fixed dependencies..." -ForegroundColor Yellow
npm install --legacy-peer-deps

Write-Host ""
Write-Host "Step 3: Installing additional performance packages..." -ForegroundColor Yellow
npm install @types/three@0.168.0 --save-dev --legacy-peer-deps

Write-Host ""
Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Restart your dev server: npm run dev"
Write-Host "2. Test the performance - should be buttery smooth!"
Write-Host "3. Check console - no more Three.js errors!"
Write-Host ""
Write-Host "🎉 Optimization complete!" -ForegroundColor Green
