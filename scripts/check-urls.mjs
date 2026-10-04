import https from 'https';

const urls = [
  'https://classos-five.vercel.app',
  'https://wordflow-fozilpro.vercel.app',
  'https://uzbjobs.vercel.app',
  'https://watches-fozilpro.vercel.app',
  'https://oltin-kalam.vercel.app',
  'https://dokon-roan.vercel.app',
  'https://audiophile-ruby-ten.vercel.app',
  'https://al-anvar.vercel.app'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 }, (res) => {
      resolve({ url, status: res.statusCode, title: res.headers['content-type'] });
    });
    req.on('error', (e) => resolve({ url, error: e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, error: 'Timeout' }); });
  });
}

async function main() {
  console.log('Checking live demo URLs:');
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(`${u} => Status: ${res.status || res.error}`);
  }
}

main();
