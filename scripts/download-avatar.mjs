import https from 'https';
import fs from 'fs';

const url = 'https://avatars.githubusercontent.com/u/157209706?v=4';
const file = fs.createWriteStream('avatar.png');

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Avatar downloaded successfully, size:', fs.statSync('avatar.png').size, 'bytes');
  });
}).on('error', (err) => {
  console.error('Error downloading avatar:', err);
});
