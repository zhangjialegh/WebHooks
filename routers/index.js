const Router = require('koa-router');
const controller = require('../controller')
const router = new Router({
    prefix: '/webhooks'
})

// test 本地测试接口
router.post('/publish/test', controller.TestPublish)

// project1 websecret
router.post('/publish/websecret', controller.SecretPublish)

// TODO: project2
// router.post('/publish/project2', controller.Project2Publish)

module.exports = router