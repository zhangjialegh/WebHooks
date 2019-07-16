const spawn = require('child_process').spawn;

exports.AutoPublish = (cmd, args) => {
    return new Promise((resolve, reject) => {
        const child = spawn(cmd, args)
        let res = ''
        child.stdout.on('data', buffer => res += buffer)
        child.stdout.on('end', () => resolve(res))
    })

}