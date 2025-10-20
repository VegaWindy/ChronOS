const express = require('express')
const app = express()
const port = 3000  // 端口

app.use(express.json())  // 解析 json 请求体

app.get('/', (req, res) => {  // 主页
  res.send('Hello World!')
})

app.get('/api/data', (req, res) => {  // 用户向服务器请求数据
  res.json({ message: 'GET 接口的返回数据', value: 123 })
})

app.post('/api/update', (req, res) => {  // 用户向服务器发送数据
  const input = req.body.inputValue
  // 处理 input，比如存数据库等
  res.json({ status: 'success', received: input })
})

app.listen(port, () => {  // 启动服务器
  console.log(`Example app listening on port ${port}`)
})