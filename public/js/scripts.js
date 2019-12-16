window.onload = function() {
    console.log('Loaded site')
  }

  let myMap = () => {
    let marker = new google.maps.Marker({ position: mapProp.center,
        animation: google.maps.Animation.BOUNCE, icon: '/custom.png' })
       marker.setMap(map)
    let mapProp = {
      center: new google.maps.LatLng(1.2921,36.8219),
      zoom: 5
    }
    let map = new google.maps.Map(document.getElementById('myMap'),
    mapProp)
  }