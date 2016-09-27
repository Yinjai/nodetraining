var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./routes/routes');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(3004, () => {
  console.log('Server listening on port 3004');
})
