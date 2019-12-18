const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = MongoClient.ObjectID;
const url = 'mongodb://localhost:27017';
const bodyParser = require("body-parser");
const mapsClient = require('./controllers/maps');
// const db = mongoose.connection;
// const commentsClient = require('./controllers/comments')
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
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const urlencodedParser = bodyParser.urlencoded({extended: false})

// var mongoDB = process.env.MONGO_CONNECT_URI
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection;
// if(!db)
//     console.log("Error connecting db")
// else
//     console.log("Db connected successfully")

    const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0-reqdz.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("skate").collection("posts");
      // perform actions on the collection object
      client.close();
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
      image: 'reginaskateplaza7.jpg'
    }, (err, result) => {
      client.close()
      res.redirect('/')
    })
  })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  })