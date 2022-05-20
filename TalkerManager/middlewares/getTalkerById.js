const { getById } = require('../utils');

const getTalkerById = async (req, res, _next) => {
  const talkerId = parseInt(req.params.id, 10);

  const requestedTalker = await getById(talkerId);

  if (!requestedTalker) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(requestedTalker);
};

module.exports = getTalkerById;