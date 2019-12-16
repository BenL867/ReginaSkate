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

