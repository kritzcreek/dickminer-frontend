document.addEventListener("DOMContentLoaded", function () {
    var tagline = document.querySelector("p.tagline");
    tagline.innerText = "Welcome to Dickminer!";
    //document.getElementById('testButton').onclick = getRoot;
});

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