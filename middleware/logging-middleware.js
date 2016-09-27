var logging = function(request, response, next) {
  console.log('This happens every time');
  return next();
};

module.exports = logging;
