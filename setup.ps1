# Setup script for Cyscom Certificates Portal

Write-Host "Setting up Cyscom Certificates Portal..." -ForegroundColor Green

# Check if conda is installed
if (!(Get-Command conda -ErrorAction SilentlyContinue)) {
    Write-Host "Conda is not installed. Please install Miniconda or Anaconda first." -ForegroundColor Red
    exit 1
}

# Create and activate conda environment
Write-Host "Creating conda environment..." -ForegroundColor Yellow
conda create -n cyscomcerts python=3.9 -y
conda activate cyscomcerts

# Install Node.js
Write-Host "Installing Node.js..." -ForegroundColor Yellow
conda install nodejs -y

# Install npm dependencies
Write-Host "Installing npm dependencies..." -ForegroundColor Yellow
npm install

# Create .env file from example if it doesn't exist
if (!(Test-Path .env)) {
    Write-Host "Creating .env file from example..." -ForegroundColor Yellow
    Copy-Item example.env .env
    Write-Host "Please configure your .env file with appropriate values." -ForegroundColor Yellow
}

# Create videos directory if it doesn't exist
if (!(Test-Path public/videos)) {
    Write-Host "Creating videos directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path public/videos -Force
}

Write-Host "`nSetup completed!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Configure your .env file with appropriate values" -ForegroundColor White
Write-Host "2. Place your background video in public/videos/background.mp4" -ForegroundColor White
Write-Host "3. Run 'npm run dev' to start the development server" -ForegroundColor White 