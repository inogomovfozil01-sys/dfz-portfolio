import fs from 'fs';

const detailed = JSON.parse(fs.readFileSync('public-repos-detailed.json', 'utf-8'));

detailed.slice(0, 5).forEach(d => {
  console.log('====================================');
  console.log(`Repo: ${d.name}`);
  console.log(`URL: ${d.url}`);
  console.log(`Homepage: ${d.homepage || 'NONE'}`);
  console.log(`Desc: ${d.description || 'NONE'}`);
  console.log(`Languages:`, JSON.stringify(d.languages));
  console.log(`Topics:`, d.topics.join(', '));
  console.log(`Root files:`, d.tree.map(t => t.name).join(', '));
  if (d.packageJson) {
    console.log(`Dependencies:`, d.packageJson.dependencies.join(', '));
    console.log(`DevDependencies:`, d.packageJson.devDependencies.join(', '));
  }
  if (d.requirementsTxt) {
    console.log(`Requirements:`, d.requirementsTxt.trim().split('\n').join(', '));
  }
  if (d.readme) {
    console.log(`Readme preview:`, d.readme.slice(0, 500).replace(/\n/g, ' '));
  }
});
