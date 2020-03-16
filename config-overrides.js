const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = (config, env) => {

    config.resolve.alias = Object.assign(config.resolve.alias, {
        '@gia/assets': resolve('src/assets'),
        '@gia/components': resolve('src/components'),
        '@gia/layout': resolve('src/layout')
    })

    return config
}

