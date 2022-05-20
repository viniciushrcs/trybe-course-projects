const { editTalker } = require('../utils');

const editTalkerById = async (req, res, _next) => {
    const id = parseInt(req.params.id, 10);
    const { body } = req;
  
    const modifiedTalker = await editTalker(id, body);
  
    return res.status(200).json(modifiedTalker);
  };

  module.exports = editTalkerById;