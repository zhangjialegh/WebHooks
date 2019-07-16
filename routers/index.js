const Router = require('koa-router');
const controller = require('../controller')
const router = new Router({
    prefix: '/webhooks'
})

router.get('/publish', controller.GitlabPublish)

module.exports = router