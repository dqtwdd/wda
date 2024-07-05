var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser());

var db = require('../database/mysql');

router.use(function (req, res, next) {
  var data = '';
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    req.body = data;
    next();
  });
});

/* GET home page. */
router.post('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var reqBody = req.body || '{}';
  reqBody = JSON.parse(reqBody);

  var time = new Date().toLocaleString();
  db.queryArgs('INSERT INTO pv (user, ua, href,time) VALUES (?,?,?,?);', [reqBody.email, reqBody.ua, reqBody.path, time], function (err, rows) {
    // 以json的形式返回
    // res.json({ rows });
  });
  res.send(JSON.stringify(req.body));
});

module.exports = router;
