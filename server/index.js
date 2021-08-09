const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')  // indexは省略可
const FakeDB = require('./fake-db')
const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(
  () => {
    if (process.env.NODE_ENV !== 'production') {
      // 本番で初期化はNG
      const fakeDb = new FakeDB()
      // fakeDb.seeDb()
      // fakeDb.initDb()  // 必要に応じて初期化
    }
  }
)

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const assert = require('assert')
// const client = new MongoClient(config.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,})

// client.connect().then((client)=>{
//   var db = client.db('study')
//   db.collection('user').find().toArray(function (err, result) {
//     if (err) throw err
//     console.log(result);
//   })
//   // const fakeDb = new FakeDB()
//   // fakeDb.initDb()
// })

const app = express()
// エンドポイント
app.use('/api/v1/products', productRoutes)
// app.get('/products', function(req, res) {
//     res.json({'success': true})
// })

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
  app.use(express.static(appPath))
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}

// 環境が変わった場合への対応
const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
  console.log('I am running!')
})
