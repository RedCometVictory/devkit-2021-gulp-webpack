const jwt = require('jsonwebtoken');
const config = require('config');

// middlware func has access to req/res objects, call next cb to move onto next piece of middleware
module.exports = function(req, res, next) {
  // Get token from within header (when req is sent to protected route) is required
  const token = req.header('x-auth-token'); // header key in which the token is sent

  // Check if not token - if route is protected via this middleware
  if(!token) {
    return res.status(401).json({ msg: 'No token. Authorization denied.' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // decoded has user in the payload (attatched user with the id in the payload)
    req.user = decoded.user;
    next();
  } catch(err) {
    res.status(401).json({ msg: 'Token is not valid.' });
  }
};
/*
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
*/