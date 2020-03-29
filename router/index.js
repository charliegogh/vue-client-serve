// DB=require('../model/db.js'),
const web = require('./web'),
router = require('koa-router')();
router.use(web);
module.exports = router.routes();
