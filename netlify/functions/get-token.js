const crypto = require('crypto');

exports.handler = async function(event, context) {
  // Получаем текущую дату в формате YYYY-MM-DD по UTC
  const currentDate = new Date().toISOString().split('T')[0];
  const secret = 'R0main3-super-secret-key'; // держи в секрете

  const token = crypto
    .createHash('sha256')
    .update(secret + currentDate) // меняется только в 00:00 UTC
    .digest('hex');

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // 👈 разрешаем CORS
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify({ token })
  };
};
