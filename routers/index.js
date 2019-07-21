const Router = require('koa-router');
const controller = require('../controller')
const router = new Router({
    prefix: '/webhooks'
})

// project1 websecret
router.post('/publish/websecret', controller.SecretPublish)

// TODO: project2
// router.post('/publish/project2', controller.Project2Publish)

module.exports = router