// DB=require('../model/db.js'),
// const console = require('./console');
const wrap = require('./wrap');
router = require('koa-router')();
// router.use(console);
router.use(wrap);
module.exports = router.routes();
