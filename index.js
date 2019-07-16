const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config.js');
const app = new Koa()
const NODE_ENV = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'

app.use(bodyParser({
  formLimit: '1mb'
}))

//  路由
app.use(require('./routers/wxlogin.js').routes())
app.use(require('./routers/user.js').routes())
app.use(require('./routers/cards.js').routes())


app.listen(config[NODE_ENV].port)

console.log(`listening on port ${config[NODE_ENV].port}`)
