const getPhrasesFromJson = require('../utils/getPhrasesFromJson');

/**
 * Valida id recebido por parametro
 * @returns {{
 *  message: String
 * }}
 */

const validationId = async (req, res, next) => {
  const phrases = await getPhrasesFromJson();
    
  const { id } = req.params;

  const isIdValid = id > 0 && id <= phrases.length;

  if (!Number.isInteger(Number(id))) return res.status(400).send({ message: "O id deve ser um número inteiro."});
  if (!isIdValid) return res.status(400).send({ message: "Id inválido!"});

  next();
};

module.exports = {
  validationId
};
