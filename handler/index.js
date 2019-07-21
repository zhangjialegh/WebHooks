const exec = require('child_process').exec;

exports.AutoPublish = (cmd, path, app) => {
    return new Promise((resolve, reject) => {
        const child = exec(`sh ${cmd} ${path} ${app}`)
        child.stdout.on('data',(buffer) => {
            console.log(buffer.toString())
        })

        child.stdout.on('end',() => {
            resolve('Finished')
        })

        child.stdout.on('error',(err) => {
            reject(err)
        })
    })
}