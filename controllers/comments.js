// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//       const db = client.db('skate')
//       const collection = db.collection('comments')
//       collection.find({}).toArray((err, comments) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         client.close()
//         res.render('index', {comments: comments})
//       })
//     })
//   })
  
//   app.get('/comments/:id', (req, res) => {
//     MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//       const db = client.db('skate')
//       const collection = db.collection('comments')
//       collection.find({
//         _id: ObjectID(req.params.id)
//       }).toArray((err, comments) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         const post = comments ? comments[0] : null;
//         client.close()
//         res.render('post', {post: post})
//       })
//     })
//   })
  
//   app.post('/comments', (req, res) => {
//     MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//       const db = client.db('skate')
//       const collection = db.collection('comments')
//       collection.insertOne({
//         name: req.body.post()
//       }, (err, result) => {
//         client.close()
//         res.redirect('/')
//       })
//     })
//   })
  