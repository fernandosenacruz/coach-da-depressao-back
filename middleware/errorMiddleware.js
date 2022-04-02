const error = (error, _req, res, _next) => {
  if (error.details) return res.status(400).json({message: error.message});
  console.log(error);
  return res.status(500).json({ message: 'Something wrong does not right!' });
};

module.exports = {
  error
};