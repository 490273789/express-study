const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('获取学生')
})

module.exports = router
