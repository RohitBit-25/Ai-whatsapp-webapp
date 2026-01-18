$ErrorActionPreference = "SilentlyContinue"

Write-Host "Configuring git remote..."
git remote remove origin 2>$null
git remote add origin https://github.com/RohitBit-25/Ai-whatsapp-webapp

Write-Host "Adding files..."
git add .

Write-Host "Committing changes..."
git commit -m "feat: Initial commit for AI WhatsApp Clone`n`n- Real-time messaging with Convex`n- Video calls with ZegoCloud`n- AI integration with OpenAI`n- Secure auth with Clerk"

Write-Host "Pushing to GitHub..."
git branch -M main
git push -u origin main

Write-Host "Done!"
