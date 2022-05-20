const crypto = require('crypto');

const PASSWORD_LENGTH = 6;

const login = (req, res) => {
  const { email, password } = req.body;
  const checkEmail = /\S+@\S+\.\S+/i.test(email);
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!checkEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < PASSWORD_LENGTH) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return res.status(200).json({ token: crypto.randomBytes(8).toString('hex') });
};
module.exports = login;

// Honestidade Acadêmica:
// https://security.stackexchange.com/questions/218044/how-to-generate-short-fixed-length-cryptographic-hashes
// https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options
// https://github.com/tryber/sd-09-project-talker-manager/pull/78/files#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346L6
