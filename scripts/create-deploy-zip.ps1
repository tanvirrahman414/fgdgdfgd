param(
  [string]$OutName = "app-deploy.zip",
  [string]$Root = "."
)

Write-Host "Creating deploy zip: $OutName from root: $Root"

Push-Location $Root
try {
  $files = Get-ChildItem -Recurse -File | Where-Object {
    $_.FullName -notlike "*\\node_modules\\*" -and
    $_.FullName -notlike "*\\.git\\*" -and
    $_.FullName -notlike "*\\dist\\*" -and
    $_.FullName -notlike "*\\build\\*"
  } | Select-Object -ExpandProperty FullName

  if (-not $files) {
    Write-Error "No files found to archive. Are you in the project root?"
    exit 1
  }

  if (Test-Path $OutName) { Remove-Item $OutName -Force }
  Compress-Archive -Path $files -DestinationPath $OutName -Force
  Write-Host "Created $OutName"
} finally {
  Pop-Location
}

Write-Host "Tip: upload $OutName into a new folder outside public_html (e.g. /home/youruser/my-app), extract, then run 'npm ci' and 'npm run build' on the server."