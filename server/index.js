const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDB = require('./fake-db')
const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(
  () => {
      const fakeDb = new FakeDB()
      // fakeDb.seeDb()
      fakeDb.initDb()
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

// 環境が変わった場合への対応
const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})
