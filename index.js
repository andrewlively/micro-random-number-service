const { send } = require('micro');
const query = require('micro-query');

function generateRandomNumber(min = 1, max = 5) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max) {
    max = min + 1;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = (req, res) => {
  const { min, max } = query(req);
  const number = generateRandomNumber(min, max);
  
  res.setHeader('Access-Control-Allow-Origin', '*')

  send(res, 200, { number });
};
