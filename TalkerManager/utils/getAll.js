const fs = require('fs').promises;

const getAll = async () => {
  const talkerBuffer = await fs.readFile('./talker.json', 'utf8');

  const talkers = JSON.parse(talkerBuffer);

  return talkers;
};

module.exports = getAll;
