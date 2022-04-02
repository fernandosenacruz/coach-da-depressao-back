const { error } = require('./errorMiddleware');
const { validationId } = require('./validations');
const validateNewUser = require('./validateNewUser');
const validateNewPost = require('./validateNewPost');

module.exports = {
  error,
  validationId,
  validateNewUser,
  validateNewPost,
};
