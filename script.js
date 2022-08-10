function switchOff(){
    document.getElementById("bulbImage").src = 
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById('catImage').src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('switchStatus').textContent= 'switched off';
    document.getElementById('switchOn').style.backgroundColor = "grey";
    document.getElementById('switchOff').style.backgroundColor = "red";
 }
 function switchOn(){
    document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById('catImage').src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switchStatus').textContent= 'switched on';
    document.getElementById('switchOn').style.backgroundColor = "green";
    document.getElementById('switchOff').style.backgroundColor = "grey";
    
 }