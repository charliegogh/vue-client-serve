const user = require('./user');
const router = require('koa-router')();
router.use(user);
module.exports = router.routes();
