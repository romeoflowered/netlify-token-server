const crypto = require('crypto');

exports.handler = async function(event, context) {
  // Получаем количество минут, прошедших с начала эпохи
  const currentTime = Math.floor(Date.now() / 60000); // делим на 60000 для получения минут
  const secret = 'R0main3-super-secret-key'; // держи в секрете

  const token = crypto
    .createHash('sha256')
    .update(secret + currentTime) // Используем текущее время в минутах
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
