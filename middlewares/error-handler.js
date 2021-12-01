function errorHandler(err, req, res, next) {
  const isUnauthorized  = /\b(Unauthorized)\b/g.test(err.message);
  const isNotFound      = /\b(path)\b/g.test(err.message);

  if (isUnauthorized) {
    res.status(401).json({
      status: 'fail',
      message: err.message
    });
  } else if (isNotFound) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: `Something went wrong. ${err.message}`
    })
  }
}

module.exports = errorHandler;