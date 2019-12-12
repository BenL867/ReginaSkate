const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/my_database';
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const viewPostController = require('./controllers/viewPosts');
const storePost = require('./middleware/storePost');
const router = express.Router();
const url = 'mongodb://localhost:27017/skate/'
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}")

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

app.set('view engine', 'pug')
app.use(fileUpload());
app.use(express.static('public'));
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

 
app.use('/posts/store', storePost)
app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/posts/new", createPostController);
app.post("/posts/store", storePostController);


app.get('/posts', (req, res) => {
  posts.find().exec(posts)
  res.json(posts)
  }) 

app.get('/posts', (req, res) => {
  post.find({}).exec((err, users) => {
    res.json(post)
  })
})

app.get('/users/:id', (req, res) => {
  UserModel.findOne({_id: req.params.id}).exec((err, user) => {
    if(err) {
      return res.status(400).json(err)
    }
    res.json(post)
  })
})

app.post('/posts', (req, res) => {
  post.create(req.body, (err, user) => {
    if(err) {
      return res.status(400).json(err)
    }
    res.json(post)
  })
})


// router.post('/insert' , function(req, res, next) {
//     var item = {
//         name: req.body.name,
//         image: req.body.image,
//         description: req.body.description,
//         location: req.body.location,
//     };
//     mongoDB.connect(url, function(err, db) {
//         assert.equal(null, err);
//         db.collection('posts').insertOne(item, function(err, result) {
//             assert.equal(null, err);
//             console.log('Item Inserted');
//             db.close();
//         })
//     });
//     res.redirect('/');
// })

// app.use(bodyParser.json())

// app.get('/posts', (req, res) => {
//   UserModel.find({}).exec((err, users) => {
//     res.json(users)
//   })
// })

// app.get('/posts/:id', (req, res) => {
//   post.findOne({_id: req.params.id}).exec((err, user) => {
//     if(err) {
//       return res.status(400).json(err)
//     }
//     res.json(user)
//   })
// })

// app.post('/posts', (req, res) => {
//   post.create(req.body, (err, user) => {
//     if(err) {
//       return res.status(400).json(err)
//     }
//     res.json(user)
//   })
// })

// router.get('/get-data', function(req, res, next) {
//     var resultArray = [];
//     mongo.connect(url, function(err, db) {
//         assert.equal(null, err);
//         var cursor = db.collection('posts').find();
//         cursor.forEach(function(doc, err) {
//             assert.equal(null, err);
//             resultArray.push(doc);
//         }, function() {
//             db.close();
//             res.render('index', {items: resultArray});
//         });
//     });
// });
// app.post("/addpost", (req, res) => {
//     var myPost = new Post(req.body);
//     myData.save()
//       .then(item => {
//         res.send("item saved to database");
//       })
//       .catch(err => {
//         res.status(400).send("unable to save to database");
//       });
//   });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  })