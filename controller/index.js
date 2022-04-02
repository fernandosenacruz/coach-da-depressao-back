const { getPhrases, getPhrasesById } = require('./Phrase');
const createUserController = require('./createUser');
const createPostController = require('./createPost');

module.exports = {
  getPhrases,
  getPhrasesById,
  createUserController,
  createPostController,
};