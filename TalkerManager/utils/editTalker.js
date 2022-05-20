const fs = require('fs').promises;

const getAll = require('./getAll');

const editTalker = async (id, talkerInfo) => {
  const talkerList = await getAll();

  const modifiedTalker = {
    id,
    ...talkerInfo,
  };

  const newTalkerList = talkerList.filter((talker) => talker.id !== id);

  newTalkerList.push(modifiedTalker);

  await fs.writeFile('./talker.json', JSON.stringify(newTalkerList));

  return modifiedTalker;
};

module.exports = editTalker;
