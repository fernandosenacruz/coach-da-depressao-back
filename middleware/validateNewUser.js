const { getUserByName } = require('../model/User.model');
const userSchema = require('../schema/userSchema');

module.exports = async  (req, res, next) => {
  try {
    await userSchema.validateAsync({ name: req.body.name, password: req.body.password });
    
    const user = await getUserByName(req.body.name);
    if (user) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }
    
    next();
  } catch (error) {
    next(error);
  }
};
