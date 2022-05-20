const { searchTalker, getAll } = require('../utils');

const searchTalkerByName = async (req, res) => {
    const { q } = req.query;
  
    if (!q || q === '') {
      const talkers = await getAll();
  
      return res.status(200).json(talkers);
    }
  
    const queryResult = await searchTalker(q);
  
    if (queryResult.length < 1) {
      return res.status(200).json([]);
    }
  
    return res.status(200).json(queryResult);
  };

  module.exports = searchTalkerByName;