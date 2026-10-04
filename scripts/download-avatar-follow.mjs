import https from 'https';
import http from 'http';
import fs from 'fs';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log('Following redirect to:', res.headers.location);
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed with status ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${dest}, size: ${fs.statSync(dest).size} bytes`);
        resolve();
      });
    }).on('error', reject);
  });
}

downloadFile('https://github.com/inogomovfozil01-sys.png?size=512', 'avatar.png')
  .catch(console.error);
