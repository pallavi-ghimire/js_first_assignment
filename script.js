var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

for(var i = 1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        var newImg = e.target.getAttribute('src');
        displayImage(newImg);
    }
}

function displayImage(newImg) {
    displayedImage.setAttribute('src', newImg);
}

btn.onclick = function() {
    var btnClass = btn.getAttribute('class');
    if(btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}