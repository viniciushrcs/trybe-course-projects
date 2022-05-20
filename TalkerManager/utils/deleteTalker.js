const fs = require('fs').promises;

const getAll = require('./getAll');

const deleteTalker = async (id) => {
  const talkerList = await getAll();
  const newTalkerList = talkerList.filter((talker) => talker.id !== id);
  await fs.writeFile('./talker.json', JSON.stringify(newTalkerList));
};

module.exports = deleteTalker;