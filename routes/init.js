const express = require('express')
const app = express()
const port = 5888

app.get('/content',(req,res)=>{
    // req和res是express封装后的对象
    console.log('头部：',req.header)
    console.log('路径：',req.path)
    console.log('query：',req.query)
    res.send('<h1>你好user</h1>')
})

// 中间件
app.get('/handle',(req,res, next)=>{
    console.log('handle1')
    next()
},(req,res, next)=>{
    console.log('handle2')
    res.send('<h1>你好user</h1>')
    next()
})
app.get('/handle',(req,res)=>{
    console.log('handle3')
})

// 动态路由
app.get('/user/:id',(req,res)=>{
    // 手动设置响应头
    // res.setHeader('a', '123')
    // res.send('<h1>你好user</h1>')
    // res.status(302).header('location', 'https://www.baidu.com').end()
    // res.status(302).location('https://www.baidu.com').end()
    res.redirect(302,'https://www.baidu.com')
})

// 匹配所有get请求
app.get('*',(req,res) => {
    console.log('路径：',req.path)
})

// 匹配所有请求
app.all(() => {
    console.log('路径：',req.path)
})

app.listen(port, () => {
    console.log(`监听${port}`)
})
