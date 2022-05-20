const getAll = require('./getAll');

const getById = async (talkerId) => {
  const talkerList = await getAll();

  const requestedTalker = talkerList.find((talker) => talker.id === talkerId);

  return requestedTalker;
};

module.exports = getById;
