const Router = require('koa-router');
const controller = require('../controller')
const router = new Router({
    prefix: '/webhooks'
})

router.post('/publish', controller.GitlabPublish)

module.exports = router