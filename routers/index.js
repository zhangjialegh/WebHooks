const router = require('koa-router')();
const controller = require('../controller')

router.get('/publish', controller.GitlabPublish)
// router.get('/api/cards/list', controller.findAllCards)
// router.get('/api/card/detail', controller.findOneCard)
// router.post('/api/card/update', controller.updateCard)
// router.get('/api/card/delete', controller.deleteCard)

module.exports = router