const getAll = require('./getAll');

const searchTalker = async (query) => {
  const talkerList = await getAll();

  const queryResult = talkerList.filter((talker) => talker.name.includes(query));

  return queryResult;
};

module.exports = searchTalker;