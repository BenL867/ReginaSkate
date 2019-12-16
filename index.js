const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/skate';
const MongoClient = require('mongodb')
const ObjectID = MongoClient.ObjectID
const url = 'mongodb://localhost:27017'
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false})
const mapsClient = require('./controllers/maps')
const commentsClient = require('./controllers/comments')
const googleMapsClient = require('@google/maps').createClient({


  key: 'AIzaSyBDlGmA373w93ScS1qzwZrgXBtLqy3Kiaw'
});
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

app.set('view engine', 'pug')
app.use(urlencodedParser)

app.get('/', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db('skate')
    const collection = db.collection('posts')
    collection.find({}).toArray((err, posts) => {
      if (err) {
        console.log(err)
        return
      }
      client.close()
      res.render('index', {posts: posts})
    })
  })
})

app.get('/posts/:id', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db('skate')
    const collection = db.collection('posts')
    collection.find({
      _id: ObjectID(req.params.id)
    }).toArray((err, posts) => {
      if (err) {
        console.log(err)
        return
      }
      const post = posts ? posts[0] : null;
      client.close()
      res.render('post', {post: post})
    })
  })
})

app.post('/posts', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db('skate')
    const collection = db.collection('posts')
    collection.insertOne({
      name: req.body.post.toUpperCase(),
      image: ''
    }, (err, result) => {
      client.close()
      res.redirect('/')
    })
  })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  })