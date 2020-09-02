const path = require("path")
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        port: "10000"
    },
    configureWebpack: {
        name: "vue实践"
    },
    chainWebpack: (config) => {
        // 配置svg规则 排除icons目录中svg文件处理
        // 目标给svg规则增加一个排除选项exclude:['path/to/icon']
        config.module.rule('svg')
            .exclude.add(resolve("./src/icons"))
        // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('./src/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' })
    }
}