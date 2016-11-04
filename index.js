const express = require('express');
const jade = require('jade');

const app = express();
app.set('view engine', 'jade');

app.get('/', function (req, res) {

  console.log('do...')
  res.render('index.jade')

});


app.listen(8080);
