var express = require('express');
var router = express.Router();

var db = require('../database/mysql');

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM pv', function (err, rows) {
    // 以json的形式返回
    res.json({ code: 0, rows });
  });
});

module.exports = router;
