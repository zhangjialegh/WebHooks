const Handler = require('../handler')
const path = require('path')
const cmd = path.join(__dirname, '../deploy/deploy-test.sh')
const pathRoute = '/srv/WebHooks'
const appName = 'app'

exports.GitlabPublish = async (ctx) => {
    try {
        const text = await Handler.AutoPublish(cmd, pathRoute, appName)
        ctx.body = {
            code: 200,
            success: true,
            data: {
                data: text
            }
        }
    } catch (error) {
        ctx.body = {
            code: 500,
            success: false,
            message: error.message
        }
    }

}