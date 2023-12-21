const contenful = require('contentful');

export const client = contenful.createClient({
  space: process.env.CONTENFUL_SPACE_ID!,
  accessToken: process.env.CONTENFUL_ACCESS_TOKEN!,
});
