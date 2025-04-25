// netlify/functions/get-token.js
exports.handler = async function(event, context) {
  const currentDate = new Date().toISOString().split('T')[0];
  const token = currentDate + '-R0main3'; // любой кастомный токен по дате
  return {
    statusCode: 200,
    body: JSON.stringify({ token })
  };
};
