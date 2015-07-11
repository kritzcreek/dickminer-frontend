document.addEventListener("DOMContentLoaded", function () {
    //document.getElementById('testButton').onclick = getRoot;
    
    var map = L.map('map', {
			center: [30, -30],
			zoom: 2,
			minZoom: 2
		})
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> Made By Some Dick Heads!',
        maxZoom: 18,
        id: 'rivanov.c7b05156',
        accessToken: 'pk.eyJ1Ijoicml2YW5vdiIsImEiOiJmNjdkODk3YjdjN2ZkYjcyNjI2ZGJiYWUwOTFmMjdiMyJ9.Gv8Q7wg9Sj9zCnDGYXr6Ig'
    }).addTo(map);
    
    
    var heat = L.heatLayer([],{
        blur: 15,
        radius: 25,
        maxZoom: 12
    }).addTo(map);
    getWorld(heat);

});

/*
* Makes AJAX request to http://dickminer.asciidick.com/world
*/
function getWorld(heat){
    var r = new XMLHttpRequest();
    r.open("GET", "/api/world", true);
    r.onreadystatechange = function () {
        console.log("Response", r);
        var result = JSON.parse(r.responseText);
        result.map(function(val){
            heat.addLatLng(val)
        })
        if (r.readyState != 4 || r.stat != 200) return;
    };
    r.send("banana=yellow");
}

/*
* Maps the button click to the root route
*/
function getRoot(){
    var r = new XMLHttpRequest();
    r.open("GET", "/city", true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      alert("Success: " + r.responseText);
    };
    r.send("banana=yellow");
}
