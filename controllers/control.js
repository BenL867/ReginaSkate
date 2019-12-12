router.post('/insert' , function(req, res, next) {
    var item = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        location: req.body.location,
    };
    mongoDB.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('posts').insertOne(item, function(err, result) {
            assert.equal(null, err);
            console.log('Item Inserted');
            db.close();
        })
    });
    res.redirect('/');
})

app.use(bodyParser.json())

app.get('/posts', (req, res) => {
  UserModel.find({}).exec((err, users) => {
    res.json(users)
  })
})

app.get('/posts/:id', (req, res) => {
  post.findOne({_id: req.params.id}).exec((err, user) => {
    if(err) {
      return res.status(400).json(err)
    }
    res.json(user)
  })
})

app.post('/posts', (req, res) => {
  post.create(req.body, (err, user) => {
    if(err) {
      return res.status(400).json(err)
    }
    res.json(user)
  })
})

router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('posts').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});
app.post("/addpost", (req, res) => {
    var myPost = new Post(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });