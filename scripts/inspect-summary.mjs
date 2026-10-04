import fs from 'fs';

const user = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
console.log('=== USER DETAILS ===');
console.log('Login:', user.login);
console.log('Name:', user.name);
console.log('Bio:', user.bio);
console.log('Company:', user.company);
console.log('Blog/Website:', user.blog);
console.log('Location:', user.location);
console.log('Email:', user.email);
console.log('Twitter:', user.twitter_username);
console.log('Public repos count in profile:', user.public_repos);
console.log('Followers:', user.followers);
console.log('Following:', user.following);
console.log('Created at:', user.created_at);
console.log('Avatar URL:', user.avatar_url);

const repos = JSON.parse(fs.readFileSync('repos.json', 'utf-8'));
console.log('\nTotal repos fetched:', repos.length);

const publicRepos = repos.filter(r => !r.isPrivate);
console.log('Public repos fetched:', publicRepos.length);

console.log('\n=== ALL PUBLIC REPOS ===');
publicRepos.forEach((r, i) => {
  console.log(`${i + 1}. [${r.name}]`);
  console.log(`   URL: ${r.url}`);
  console.log(`   Homepage: ${r.homepageUrl || 'none'}`);
  console.log(`   Description: ${r.description || 'none'}`);
  console.log(`   Pushed: ${r.pushedAt}`);
});

console.log('\n=== REPOS 1 to 20 IN LIST ===');
repos.slice(0, 20).forEach((r, i) => {
  console.log(`${i + 1}. [${r.name}] (private: ${r.isPrivate})`);
  console.log(`   URL: ${r.url}`);
  console.log(`   Homepage: ${r.homepageUrl || 'none'}`);
  console.log(`   Description: ${r.description || 'none'}`);
});
