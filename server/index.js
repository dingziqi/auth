const Koa = require('koa');
const Views = require('koa-views');
const router = require('./routers');

const app = new Koa();
const render = Views(__dirname + '/views', {
  extension: 'ejs',
});

app.use(render);
app.use(router.routes());

app.listen('8080', () => {
  console.log('server is run at http://localhost:8080');
})