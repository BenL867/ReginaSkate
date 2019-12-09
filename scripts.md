app.post('/', function(req, res) {
  res.send('Request using POST');
});

app.get('/', function(request, response) {
  res.status(200).json({ firsname: 'Pepe', lastname: 'Martin'});
});

app.get('/error', function(request, response) {
  res.status(500).send('Server error');
});


app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});