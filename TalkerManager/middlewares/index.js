const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const login = require('./login');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');
const addTalker = require('./addTalker');
const validateDate = require('./validateDate');
const validateRate = require('./validateRate');
const editTalkerById = require('./editTalkerById');
const deleteTalkerById = require('./deleteTalkerById');
const searchTalkerByName = require('./searchTalkerByName');

module.exports = {
  getAllTalkers,
  getTalkerById,
  login,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  addTalker,
  editTalkerById,
  deleteTalkerById,
  searchTalkerByName,
};
