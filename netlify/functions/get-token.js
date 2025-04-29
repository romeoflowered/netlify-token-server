// netlify/functions/get-token.js

const crypto = require('crypto');

exports.handler = async function(event, context) {
  const currentDate = new Date().toISOString().split('T')[0];
  const secret = 'R0main3-super-secret-key'; // держи в секрете, не палить

  const token = crypto
    .createHash('sha256')
    .update(secret + currentDate)
    .digest('hex');

  return {
    statusCode: 200,
    body: JSON.stringify({ token })
  };
};
