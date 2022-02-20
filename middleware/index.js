const { error } = require('./errorMiddleware');
const { validationId } = require('./validations');

module.exports = {
  error,
  validationId
};
