const { readFile } = require('fs/promises');
const generateRandomId = require('../utils/randomId');

const getPhrases = async (req, res, next) => {
  try {
    const phrases = await readFile('./assets/phrases.json', 'utf-8')
      .then((phrases) => JSON.parse(phrases));
  
    const phrasesLength = phrases.length;
    const randomId = generateRandomId(phrasesLength);

    return res.status(200).json(phrases[randomId]);
  } catch (err) {
    next(err);
  };
};

module.exports = {
  getPhrases,
};