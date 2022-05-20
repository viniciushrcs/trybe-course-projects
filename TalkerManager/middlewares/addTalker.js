const { addNewTalker } = require('../utils');

const addTalker = async (req, res, _next) => {
    const { body } = req;
  
    const newTalker = await addNewTalker(body);
  
    return res.status(201).json(newTalker);
  };

  module.exports = addTalker;