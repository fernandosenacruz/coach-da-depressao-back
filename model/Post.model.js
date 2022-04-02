const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = async (post) => {
  const newPost = await prisma.post.create({
    data: {
      ...post,
      authorId: 1,
    },
  });
  return newPost;
};

const getPostByContent = async (content) => {
  const post = await prisma.post.findFirst({
    where: {
      content,
    },
  });
  return post; 
}

module.exports = {
  createPost,
  getPostByContent,
};