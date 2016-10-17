var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var appPath = "/client/source/";
var ejs = require('ejs')
var bodyParser = require('body-parser');

var routes = require('./server/routes/routes.js');

app.set("view engine", "ejs")
app.set('views', __dirname + appPath);
console.log(__dirname);
app.use(express.static(path.join(__dirname, appPath)));
app.engine('html', ejs.renderFile);
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);


/*app.get('/', function(req, res) {
    res.render('index.ejs');
})*/

app.listen(8081);
console.log("8081 is the magic port");
