import { execSync } from 'child_process';
import fs from 'fs';

function runGh(cmd) {
  try {
    return execSync(`gh ${cmd}`, { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
  } catch (e) {
    return null;
  }
}

const repos = JSON.parse(fs.readFileSync('repos.json', 'utf-8'));
const publicRepos = repos.filter(r => !r.isPrivate);

const detailed = [];

for (const r of publicRepos) {
  console.log(`Analyzing public repo: ${r.name}...`);
  const details = {
    name: r.name,
    url: r.url,
    homepage: r.homepageUrl,
    description: r.description,
    pushedAt: r.pushedAt,
    createdAt: r.createdAt,
    topics: (r.repositoryTopics || []).map(t => t.name),
    languages: {},
    packageJson: null,
    requirementsTxt: null,
    readme: null,
    tree: []
  };

  // Get languages
  const langStr = runGh(`api repos/inogomovfozil01-sys/${r.name}/languages`);
  if (langStr) {
    try { details.languages = JSON.parse(langStr); } catch (e) {}
  }

  // Get root contents
  const contentsStr = runGh(`api repos/inogomovfozil01-sys/${r.name}/contents`);
  if (contentsStr) {
    try {
      const items = JSON.parse(contentsStr);
      details.tree = items.map(i => ({ name: i.name, type: i.type, path: i.path }));
    } catch (e) {}
  }

  // Check package.json
  const pkgStr = runGh(`api repos/inogomovfozil01-sys/${r.name}/contents/package.json`);
  if (pkgStr) {
    try {
      const pkgObj = JSON.parse(pkgStr);
      if (pkgObj.content) {
        const decoded = Buffer.from(pkgObj.content, 'base64').toString('utf-8');
        const parsed = JSON.parse(decoded);
        details.packageJson = {
          name: parsed.name,
          dependencies: Object.keys(parsed.dependencies || {}),
          devDependencies: Object.keys(parsed.devDependencies || {})
        };
      }
    } catch (e) {}
  }

  // Check requirements.txt
  const reqStr = runGh(`api repos/inogomovfozil01-sys/${r.name}/contents/requirements.txt`);
  if (reqStr) {
    try {
      const reqObj = JSON.parse(reqStr);
      if (reqObj.content) {
        details.requirementsTxt = Buffer.from(reqObj.content, 'base64').toString('utf-8');
      }
    } catch (e) {}
  }

  // Check README
  const readmeStr = runGh(`api repos/inogomovfozil01-sys/${r.name}/readme`);
  if (readmeStr) {
    try {
      const readmeObj = JSON.parse(readmeStr);
      if (readmeObj.content) {
        details.readme = Buffer.from(readmeObj.content, 'base64').toString('utf-8');
      }
    } catch (e) {}
  }

  detailed.push(details);
}

fs.writeFileSync('public-repos-detailed.json', JSON.stringify(detailed, null, 2), 'utf-8');
console.log('Finished analyzing all public repos!');
