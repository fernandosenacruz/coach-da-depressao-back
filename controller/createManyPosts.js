const { createManyPosts } = require('../model/Post.model');

module.exports = async function createManyPostsController(req, res, next) {
  try {
   await createManyPosts(req.body);

    return res.status(201).json({ message: 'Posts created' });
  } catch (error) {
    next(error);
  }
};
