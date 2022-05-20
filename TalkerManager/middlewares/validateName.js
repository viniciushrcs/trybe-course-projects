const validateName = (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (req.body.name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
};

module.exports = validateName;
