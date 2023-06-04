module.exports = (req, res, next) => {
    if(req.path.startsWith('/api')) {
        // 请求接口
        next()
    } else {
       console.log('')
        if(true) {
            res.send('静态资源')
        } else {
            next()
        }
    }
}
