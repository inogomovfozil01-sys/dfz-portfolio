import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function verify() {
  console.log('Starting Playwright UI verification...');
  const browser = await chromium.launch();
  
  // 1. Desktop Test
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  // Listen to console and page errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console error: ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    errors.push(`Page error: ${err.message}`);
  });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const desktopScreenshot = path.resolve('public', 'portfolio-preview-desktop.png');
  await page.screenshot({ path: desktopScreenshot, fullPage: true });
  console.log(`Saved desktop screenshot: ${desktopScreenshot}`);

  // Test language toggle
  console.log('Testing Language Switcher to EN...');
  await page.click('button[aria-label="Toggle language between Russian and English"]');
  await page.waitForTimeout(600);
  const enScreenshot = path.resolve('public', 'portfolio-preview-en.png');
  await page.screenshot({ path: enScreenshot, fullPage: false });
  console.log(`Saved English toggle screenshot: ${enScreenshot}`);

  // 2. Projects Page Test
  console.log('Navigating to /projects...');
  await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Type in search
  await page.fill('input[type="text"]', 'AI');
  await page.waitForTimeout(500);
  const projectsScreenshot = path.resolve('public', 'portfolio-preview-projects.png');
  await page.screenshot({ path: projectsScreenshot, fullPage: false });
  console.log(`Saved projects search screenshot: ${projectsScreenshot}`);

  // 3. Mobile Viewport Test (iPhone 14 style: 390x844)
  console.log('Testing Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  const mobileScreenshot = path.resolve('public', 'portfolio-preview-mobile.png');
  await mobilePage.screenshot({ path: mobileScreenshot, fullPage: true });
  console.log(`Saved mobile screenshot: ${mobileScreenshot}`);

  await browser.close();

  if (errors.length > 0) {
    console.warn('UI Warnings/Errors observed:', errors);
  } else {
    console.log('SUCCESS: Zero console or page errors detected!');
  }
}

verify().catch(console.error);
