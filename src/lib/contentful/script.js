// script.js
import { exec } from 'child_process';

const acessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;

const command = `contentful space export --config contentful/export-config.json --management-token ${acessToken} --space-id ${spaceId}`;

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
