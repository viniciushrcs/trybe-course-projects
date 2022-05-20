const validateDate = (req, res, next) => {
    const {
      talk: { watchedAt },
    } = req.body;
    const dateRegex = new RegExp('\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d');
  
    if (!dateRegex.test(watchedAt)) {
      return res
        .status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
  
    next();
  };

  module.exports = validateDate;
