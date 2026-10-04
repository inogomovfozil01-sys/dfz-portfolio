import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const targets = [
  { id: 'classos', url: 'https://classos-five.vercel.app', name: 'ClassOS' },
  { id: 'wordflow', url: 'https://wordflow-fozilpro.vercel.app', name: 'WordFlow' },
  { id: 'uzbjobs', url: 'https://uzbjobs.vercel.app', name: 'UzbJobs' },
  { id: 'watches', url: 'https://watches-fozilpro.vercel.app', name: 'Watches' },
  { id: 'oltin-kalam', url: 'https://oltin-kalam.vercel.app', name: 'Oltin Kalam' },
  { id: 'dokon', url: 'https://dokon-roan.vercel.app', name: 'Dokon' },
  { id: 'audiophile', url: 'https://audiophile-ruby-ten.vercel.app', name: 'Audiophile' },
  { id: 'al-anvar', url: 'https://al-anvar.vercel.app', name: 'Al Anvar' }
];

async function capture() {
  const outDir = path.resolve('public', 'projects');
  fs.mkdirSync(outDir, { recursive: true });

  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });

  for (const t of targets) {
    console.log(`Navigating to ${t.name} (${t.url})...`);
    try {
      const page = await context.newPage();
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 25000 });
      await page.waitForTimeout(2000); // allow animations/rendering
      const outFile = path.join(outDir, `${t.id}.png`);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log(`Saved screenshot for ${t.name}: ${outFile} (${fs.statSync(outFile).size} bytes)`);
      await page.close();
    } catch (err) {
      console.error(`Failed to capture ${t.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('Finished capturing all screenshots!');
}

capture().catch(console.error);
