const fs = require('fs').promises;

const getAll = require('./getAll');

const addNewTalker = async (talker) => {
  const talkerList = await getAll();

  const newTalker = {
    id: talkerList.length + 1,
    ...talker,
  };

  talkerList.push(newTalker);

  await fs.writeFile('./talker.json', JSON.stringify(talkerList));

  return newTalker;
};

module.exports = addNewTalker;
