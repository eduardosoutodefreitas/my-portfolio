// scripts/contentful.js
const { exec } = require('child_process');
const dotenv = require('dotenv');

dotenv.config();

const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;

const command = `contentful space export --config contentful/export-config.json --management-token ${managementToken} --space-id ${spaceId}`;

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
