var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');

app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/cens/timeout/', function (req, res) {
  res.render('index');
});

app.get('/cens/timeout/status', function (req, res) {
  res.send("Hello from api");
});

app.get('/cens/timeout/data', function (req, res) {
  var timeout = req.query.timeout || 80;
  console.log("In data");
  setTimeout(function(){
    console.log("before sending the response");
    res.setHeader("Access-Control-Request-Methods", "GET");
    res.send({data:'Response from server.'});
  },(timeout*1000));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("port", process.env.PORT);
  console.log('info', 'Test app listening on port 3000!');
});


app.set('views', __dirname + '/client/');

app.use("/cens/timeout", express.static(path.join(__dirname, '/client')));