const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/my_database';
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const storePost = require('./middleware/storePost')

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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  })