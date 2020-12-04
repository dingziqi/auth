const Router = require("@koa/router");
const basicRoutes = require('./basic');

const router = new Router();
router.use('', basicRoutes.routes());

module.exports = router;