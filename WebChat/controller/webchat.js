const webchatModel = require('../models/webchat');

const getMessages = async (_req, res) => {
    const messages = await webchatModel.getAllMessages();
    const history = messages.map(({ message, nickname, timestamp }) =>
      `${timestamp} - ${nickname}: ${message}`);
    res.status(200).render('index.ejs', { history });
};

module.exports = {
    getMessages,
};