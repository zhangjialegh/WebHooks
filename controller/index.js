const Handler = require('../handler')
exports.GitlabPublish = async (ctx) => {
    try {
        const text = await Handler.AutoPublish('sh', ['../deploy/deploy-test.sh'])
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