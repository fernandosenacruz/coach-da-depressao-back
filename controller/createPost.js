const { createPostService } = require('../service/createPost.service');

module.exports = async function createPostController(req, res, next) {
  try {
    const { code, data } = await createPostService(req.body);

    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};
