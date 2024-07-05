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
  // res.send(JSON.stringify(req.body));
  db.query('SELECT * FROM pv', function (err, rows) {
    console.log('rowssss', rows);
    // 以json的形式返回
    res.json({ rows });
  });
});

module.exports = router;
