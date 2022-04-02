const { getPostByContent } = require('../model/Post.model');
const postSchema = require('../schema/postSchema');

module.exports = async function createPostController(req, res, next) {
  try {
    await postSchema.validateAsync(req.body);

    const post = await getPostByContent(req.body.content);

    if (post) return res.status(400).json({ message: 'Post already exists',});

    next();
  } catch (error) {
    next(error);
  }
};
