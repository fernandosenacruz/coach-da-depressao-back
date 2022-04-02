// const createUser = require('../service/createUser.service');
const bcrypt = require('bcryptjs');
const { createUser } = require('../model/User.model');

module.exports = async function createUserController(req, res, next) {
  try {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, async function(err, hash) {
        const bcryptUser = {
          ...req.body,
          password: hash,
        };
        
        const newUser = await createUser(bcryptUser);

        if (err) return res.status(400).json(err);

        return res.status(201).json(newUser);
      });
    });
  } catch (error) {
    next(error);
  }
};
