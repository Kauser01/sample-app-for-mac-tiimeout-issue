var express = require('express');
var path = require('path');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/data', function (req, res) {
  console.log("In data");
  setTimeout(function(){
    console.log("before sending the response");
    res.setHeader("Access-Control-Request-Methods", "GET");
    res.send({data:'Response from server.'});
  },80000);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("port", process.env.PORT);
  console.log('info', 'Test app listening on port 3000!');
});


app.set('views', __dirname + '/client/');

app.use(express.static(path.join(__dirname, '/client')));