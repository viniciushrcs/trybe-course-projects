const validateRate = (req, res, next) => {
  const {
    talk: { rate },
  } = req.body;
  
  const rateRegex = new RegExp('^[1-5]$');

  if (!rateRegex.test(rate)) {
    return res
      .status(400)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};
  
  module.exports = validateRate;
