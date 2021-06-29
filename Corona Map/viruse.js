function updatemap() {
   fetch("/data.json")
      .then(response => response.json())
      .then(rsp => {
         //console.log(rsp.data)
         console.log("UPDTAING MAP IN EVERY 2SEC")
         rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude

            cases = element.infected;
            if (cases > 290) {
               color = "rgb(181, 0, 0)"
            }

            else {
               color = `rgb(4, 135, 19)`
               //color = `rgb(${cases},0,0)`
            }

            // Mark on the map
            new mapboxgl.Marker({
               draggable: false,
               color: color
            })
               .setLngLat([longitude, latitude])
               .addTo(map);

         });
      })
}
let interval = 2000
setInterval(updatemap, interval)
