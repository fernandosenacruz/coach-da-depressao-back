const { createPost } = require('../model/Post.model');

async function createPostService(post) {
  const newPost = await createPost(post);
  return { code: 201, data: newPost };
};

module.exports = {
  createPostService,
};
