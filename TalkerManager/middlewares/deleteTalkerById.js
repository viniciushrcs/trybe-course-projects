const { deleteTalker } = require('../utils');

const deleteTalkerById = async (req, res) => {
    const id = parseInt(req.params.id, 10);

  await deleteTalker(id);

  return res
    .status(200)
    .json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalkerById;