const express = require('express');
const bodyParser = require('body-parser');

const { 
  getAllTalkers,
  getTalkerById,
  login,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
  addTalker,
  editTalkerById,
  deleteTalkerById,
  searchTalkerByName,
} = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getAllTalkers);
app.get('/talker/search', validateToken, searchTalkerByName);
app.get('/talker/:id', getTalkerById);
app.post('/login', login);

app.post('/talker', [
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  addTalker,
]);

app.put('/talker/:id', [
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  editTalkerById,
]);

app.delete(
  '/talker/:id',
  validateToken,
  deleteTalkerById,
);