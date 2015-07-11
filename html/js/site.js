document.addEventListener("DOMContentLoaded", function () {
    var tagline = document.querySelector("p.tagline");
    tagline.innerText = "Welcome to Dickminer!";
    //document.getElementById('testButton').onclick = getRoot;
    
    var map = L.map('map'
    ).setView([51.505, -0.09], 0); // The 0 sets the zoom -> 0
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'rivanov.c7b05156',
        accessToken: 'pk.eyJ1Ijoicml2YW5vdiIsImEiOiJmNjdkODk3YjdjN2ZkYjcyNjI2ZGJiYWUwOTFmMjdiMyJ9.Gv8Q7wg9Sj9zCnDGYXr6Ig'
    }).addTo(map);
    
    var addressPoints = [
[-37.8210922667, 175.2209316333, "2"],
[-37.8210819833, 175.2213903167, "3"],
[-37.8210881833, 175.2215004833, "3A"],
[-37.8211946833, 175.2213655333, "1"],
[-37.8209458667, 175.2214051333, "5"],
[-37.8208292333, 175.2214374833, "7"],
[-37.8325816, 175.2238798667, "537"],
[-37.8315855167, 175.2279767, "454"],
[-37.8096336833, 175.2223743833, "176"],
[-37.80970685, 175.2221815833, "178"],
[-37.8102146667, 175.2211562833, "190"],
[-37.8088037167, 175.2242227, "156"],
[-37.8112330167, 175.2193425667, "210"],
[-37.8116368667, 175.2193005167, "212"],
[-37.80812645, 175.2255449333, "146"],
[-37.8080231333, 175.2286383167, "125"],
[-37.8089538667, 175.2222222333, "174"],
[-37.8080905833, 175.2275400667, "129"],
[-37.808811, 175.2227592833, "172"],
[-37.80832975, 175.2276898167, "131"],
[-37.8089395333, 175.2281710333, "133"],
[-37.8093421, 175.2274883167, "135"],
[-37.8084820833, 175.22601925, "137"],
[-37.80881015, 175.22622865, "139"],
[-37.8090947667, 175.2263585667, "141"],
[-37.8092962333, 175.2244872333, "147"],
[-37.8091016667, 175.2249140167, "145"],
[-37.8088785167, 175.2253611667, "143"],
[-37.80825965, 175.22530115, "148"],
[-37.80995685, 175.2238554333, "153"],
[-37.80975435, 175.2238417833, "151"],
[-37.80950755, 175.2237912, "149"],
[-37.8092772667, 175.2231980833, "170"],
[-37.8082753833, 175.20672975, "4"],
[-37.8078434833, 175.211822, "56"],
[-37.8083775667, 175.2090812333, "30B"],
[-37.8084588, 175.2058838167, "174"],
[-37.8088788333, 175.2062702833, "175"],
[-37.8091632833, 175.20514875, "182A"],
[-37.8094891167, 175.20384695, "202"],
[-37.8156715667, 175.2034881667, "277"],
[-37.8109189333, 175.2024631, "220"]]
    
    var heat = L.heatLayer(addressPoints,{
        blur: 15,
        radius: 35,
        maxZoom: 12
    }).addTo(map);
    getWorld(heat);

});

/*
* Makes AJAX request to http://dickminer.asciidick.com/world
*/
function getWorld(heat){
    var r = new XMLHttpRequest();
    r.open("GET", "/world", true);
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