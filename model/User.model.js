const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (user) => {
  const newUser = await prisma.user.create({
    data: {
      ...user,
    },
  });
  return newUser;
};

const getUserByName = async (name) => {
  const user = await prisma.user.findFirst({
    where: {
      name,
    },
  });
  return user;
};

const listUsers = async () => prisma.user.findMany();

module.exports = {
  createUser,
  getUserByName,
  listUsers,
}