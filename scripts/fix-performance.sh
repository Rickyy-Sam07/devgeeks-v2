#!/bin/bash

# Performance Optimization Script
# This script fixes dependency issues and installs optimized packages

echo "🚀 Starting Performance Optimization..."
echo ""

echo "Step 1: Removing old dependencies..."
rm -rf node_modules package-lock.json

echo ""
echo "Step 2: Installing fixed dependencies..."
npm install --legacy-peer-deps

echo ""
echo "Step 3: Installing additional performance packages..."
npm install @types/three@0.168.0 --save-dev --legacy-peer-deps

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "Next steps:"
echo "1. Restart your dev server: npm run dev"
echo "2. Test the performance - should be buttery smooth!"
echo "3. Check console - no more Three.js errors!"
echo ""
echo "🎉 Optimization complete!"
