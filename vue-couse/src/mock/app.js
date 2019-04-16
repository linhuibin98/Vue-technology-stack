const express = require('express');
let app = express();



//设置跨域请求头
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  req.method === 'OPTIONS' ? res.sendStatus(200) : next();
})


app.post('/book', (req, res, next) => {
  res.send({ 
    book: 'vue技术栈开发实战'
  })
})

app.listen(3000, () => {
  console.log('server is running at port 3000');
})
