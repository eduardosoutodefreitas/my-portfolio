// scripts/contentful.js
const { exec } = require('child_process');
const dotenv = require('dotenv');

dotenv.config();

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;

const command = `contentful space export --config contentful/export-config.json --management-token ${accessToken} --space-id ${spaceId}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
