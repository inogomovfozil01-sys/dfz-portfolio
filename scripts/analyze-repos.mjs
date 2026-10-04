import { execSync } from 'child_process';
import fs from 'fs';

function runGh(cmd) {
  return execSync(`gh ${cmd}`, { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
}

try {
  console.log('Fetching user info...');
  const userStr = runGh('api user');
  const user = JSON.parse(userStr);
  fs.writeFileSync('user.json', JSON.stringify(user, null, 2), 'utf-8');
  console.log('User:', user.login, '| Name:', user.name, '| Bio:', user.bio, '| Email:', user.email, '| Location:', user.location);

  console.log('Fetching repos list...');
  const reposStr = runGh('repo list inogomovfozil01-sys --limit 100 --json name,description,url,homepageUrl,isPrivate,isFork,languages,pushedAt,createdAt,repositoryTopics,stargazerCount');
  const repos = JSON.parse(reposStr);
  fs.writeFileSync('repos.json', JSON.stringify(repos, null, 2), 'utf-8');
  console.log(`Found ${repos.length} repos.`);

  // Let's print out repo names and descriptions
  repos.forEach((r, idx) => {
    console.log(`${idx + 1}. ${r.name} (${r.isPrivate ? 'PRIVATE' : 'PUBLIC'}${r.isFork ? ', FORK' : ''})`);
    console.log(`   Desc: ${r.description || 'none'}`);
    console.log(`   Homepage: ${r.homepageUrl || 'none'}`);
    console.log(`   Languages: ${(r.languages || []).map(l => l.name).join(', ')}`);
    console.log(`   Topics: ${(r.repositoryTopics || []).map(t => t.name).join(', ')}`);
    console.log(`   Pushed: ${r.pushedAt}`);
  });
} catch (err) {
  console.error('Error:', err);
}
