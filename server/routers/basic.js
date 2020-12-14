const Router = require("@koa/router");
const base64 = require("base-64");
const getAuthInfo = require('../util/getAuthInfo');

const router = new Router();

router.get("/httpBasicAuthentication", async (ctx) => {
  await ctx.render("httpBasicAuthentication");
});

router.get("/api/httpBasicAuthentication/login", async (ctx, next) => {
  const { req } = ctx;

  if (!req.headers.authorization) {
    ctx.status = 401;
    ctx.set("WWW-Authenticate", 'Basic realm="localhost", charset="utf-8"');
    ctx.body = "auth fail";
    next();
  } else {
    ctx.body = `logined with: ${getAuthInfo(req.headers.authorization).info}`;
    next();
  }
});

router.get("/api/httpBasicAuthentication/logout", async (ctx, next) => {
  const { req } = ctx;

  if (req.headers.authorization) {
    ctx.status = 401;
    ctx.body = "logout success";
    next();
  } else {
    ctx.body = "not logined";
    next();
  }
});

module.exports = router;
