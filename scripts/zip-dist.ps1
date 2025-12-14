param(
  [string]$distPath = "dist",
  [string]$outDir = ".",
  [string]$prefix = "dist"
)

if (-not (Test-Path $distPath)) {
  Write-Error "Dist path '$distPath' not found. Run the build first."
  exit 1
}

$timestamp = (Get-Date).ToString('yyyyMMdd-HHmmss')
$outName = "$prefix-$timestamp.zip"
$outPath = Join-Path $outDir $outName

Write-Host "Creating zip: $outPath"

if (Test-Path $outPath) { Remove-Item $outPath }

Add-Type -AssemblyName System.IO.Compression.FileSystem
[IO.Compression.ZipFile]::CreateFromDirectory($distPath, $outPath)

Write-Host "Created $outPath"
Write-Host "Tip: upload this zip to cPanel File Manager and extract into public_html/"