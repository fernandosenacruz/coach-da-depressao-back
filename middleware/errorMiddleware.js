const error = (error, _req, res, _next) => {
  console.log(error);
  return res.status(500).json({ message: 'Something wrong does not right!' });
};

module.exports = {
  error
};