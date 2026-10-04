import fs from 'fs';

const repos = JSON.parse(fs.readFileSync('repos.json', 'utf-8'));
const matches = repos.filter(r => /usta|desk|sister|class|audio|word|job|pomog/i.test(r.name));
console.log('Matching repos:');
matches.forEach(m => console.log(`- ${m.name} (private: ${m.isPrivate}, public: ${!m.isPrivate}, url: ${m.url}, homepage: ${m.homepageUrl})`));
