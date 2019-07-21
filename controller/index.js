const Handler = require('../handler')
const path = require('path')
const cmd = path.join(__dirname, '../deploy/deploy.sh')

/**
 * websecretBackend
 * @网密小程序 的后台项目
 */
exports.SecretPublish = async (ctx) => {
  // TODO: 添加参数验证，保证有效的自动部署触发
  // ...

  const pathRoute = '/srv/websecretBackend'
  const appName = 'index'
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






/**
 * test 
 * 本地测试用，请忽略...
 */
exports.TestPublish = async (ctx) => {
  const pathRoute = '.'
  const appName = 'test'
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