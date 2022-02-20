const generateRandomId = require('../utils/randomId');
const getPhrasesFromJson = require('../utils/getPhrasesFromJson');

/**
 * Retorna uma frase aleatória
 * @returns {{
 *  id: Integer
 *  phrase: String
 *  thumbnail: String
 * }}
 */

const getPhrases = async (_req, res, next) => {
  try {
    const phrases = await getPhrasesFromJson();
  
    const phrasesLength = phrases.length;
    const randomId = generateRandomId(phrasesLength);

    return res.status(200).json(phrases[randomId]);
  } catch (err) {
    next(err);
  };
};

/**
 * Retorna frase pesquisada pelo id
 * @returns {{
 *  id: Integer
 *  phrase: String
 *  thumbnail: String
 * }}
 */

const getPhrasesById = async (req, res, next) => {
  try {
    const phrases = await getPhrasesFromJson();
    
    const { id } = req.params;

    return res.status(200).json(phrases[id]);
  } catch (err) {
    next(err);
  };
};

module.exports = {
  getPhrases,
  getPhrasesById
};