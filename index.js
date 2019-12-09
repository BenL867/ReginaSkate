const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var mongoose = require('mongoose')
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'pug')
app.use(express.static('public'));



app.get('', (req,res) => {
    res.render('index', {})
})

app.get('/', (req, res) => {
  mongoClient.connect(url,  { useUnifiedTopology: true }, (err, client) => {
   if(err) {
       console.log('error')
        return
    }
      const db = client.db('skate')
       const collection = db.collection('userPosts')
  })
      collection.find({}).toarray((err, userPosts) => {    if(err) {
          console.log('error')
           return
      }
client.close()
res.json(superheroes)
      })

})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  })