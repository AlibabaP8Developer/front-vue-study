module.exports = {
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
                // pathRewrite: { '^/api': '' }
            }
        }
    }
}
