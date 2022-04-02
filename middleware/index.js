const { error } = require('./errorMiddleware');
const { validationId } = require('./validations');
const validationNewUser = require('./validateNewUser');

module.exports = {
  error,
  validationId,
  validationNewUser,
};
