const { getPhrases, getPhrasesById } = require('./Phrase');
const createUserController = require('./createUser');
const createPostController = require('./createPost');
const createManyPostsController = require('./createManyPosts');

module.exports = {
  getPhrases,
  getPhrasesById,
  createUserController,
  createPostController,
  createManyPostsController,
};