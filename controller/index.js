const Handler = require('../handler')
const path = require('path')
const cmd = path.join(__dirname, '../deploy/deploy-test.sh')

exports.GitlabPublish = async (ctx) => {
    console.log('1111')
    try {
        const text = await Handler.AutoPublish(cmd)
        console.log(text, 'text')
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