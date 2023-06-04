const express = require('express')
const app = express()
const port = 5888
const path = require('path')
const staticRoot = path.resolve(__dirname, '../public')
// 请求时，会根据路径，从指定的目录中寻找是否存在该文件，如果存在，直接响应文件内容，而不在移交给后续中间件
// 如果不存在文件，则直接移交给后续处理
// app.use(express.static(staticRoot))
// 静态资源必须以static开头
// 默认情况下，如果映射为目录，子会自动使用index.html,可以配置
app.use('/static',express.static(staticRoot))
app.use(express.urlencoded({extended: true}))
app.use(require('./errorMiddlewarre'))

app.use('/api/student/', require('./student/index'))

app.listen(port, () => {
    console.log(`监听${port}`)
})
