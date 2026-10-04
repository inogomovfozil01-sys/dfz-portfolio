import https from 'https';
import fs from 'fs';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, text: data });
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching user info...');
  const userRes = await fetchJson('https://api.github.com/users/inogomovfozil01-sys');
  console.log('User status:', userRes.status);
  fs.writeFileSync('user.json', JSON.stringify(userRes.data, null, 2));

  console.log('Fetching repositories...');
  const reposRes = await fetchJson('https://api.github.com/users/inogomovfozil01-sys/repos?per_page=100&sort=updated');
  console.log('Repos status:', reposRes.status);
  fs.writeFileSync('repos.json', JSON.stringify(reposRes.data, null, 2));
  
  console.log('Done! Repos count:', Array.isArray(reposRes.data) ? reposRes.data.length : 'not array');
}

main().catch(console.error);
