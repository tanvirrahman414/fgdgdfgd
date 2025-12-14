import fs from 'fs/promises';
import path from 'path';

const input = process.argv[2] || 'build/client';
const outDir = process.argv[3] || 'dist';

async function main() {
  const manifestPath = path.join(input, '.vite', 'manifest.json');
  const manifestRaw = await fs.readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestRaw);

  // Find the client entry
  let entryKey = Object.keys(manifest).find((k) => {
    const v = manifest[k];
    return (
      v.isEntry &&
      (v.name === 'entry.client' || (v.src && v.src.includes('entry.client')) || v.file.includes('entry.client'))
    );
  });
  if (!entryKey) entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
  if (!entryKey) throw new Error('No entry found in manifest');

  const entry = manifest[entryKey];
  const cssFiles = entry.css || [];

  // Prepare output directory
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(path.join(outDir, 'assets'), { recursive: true });

  // Copy assets
  const srcAssetsDir = path.join(input, 'assets');
  try {
    const files = await fs.readdir(srcAssetsDir);
    for (const f of files) {
      await fs.copyFile(path.join(srcAssetsDir, f), path.join(outDir, 'assets', f));
    }
  } catch (err) {
    // If assets folder missing, continue
  }

  // Build HTML
  const cssLinks = cssFiles
    .map((h) => `<link rel="stylesheet" href="./${h}">`)
    .join('\n');

  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>App</title>
${cssLinks}
</head>
<body>
<div id="root"></div>
<script type="module" src="./${entry.file}"></script>
</body>
</html>`;

  await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  console.log('Generated', path.join(outDir, 'index.html'));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
