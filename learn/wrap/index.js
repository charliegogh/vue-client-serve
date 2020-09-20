const user = require('./user');
const upload = require('./upload');
const router = require('koa-router')();
router.use(user);
router.use(upload);
module.exports = router.routes();
