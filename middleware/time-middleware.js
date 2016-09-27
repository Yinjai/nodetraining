var time = function(request, response, next) {
  var currentTime = Date.now()
  request.currentTime = currentTime;
  return next();
};

module.exports = time;
