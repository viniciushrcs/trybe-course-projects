const { getAll } = require('../utils');

const getAllTalkers = async (_req, res, _next) => {
  try {
    const talkers = await getAll();

    return res.status(200).json(talkers);
  } catch (err) {
    return res.status(200).json([]);
  }
};

module.exports = getAllTalkers;
