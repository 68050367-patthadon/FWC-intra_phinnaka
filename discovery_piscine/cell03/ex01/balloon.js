const balloon = document.getElementById("balloon");
let size = 200;
let color = 0;

balloon.onclick = function() {
    size = size + 10;
    if (size > 420) {
        size = 200;
    }
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    color = color + 1;
    if (color > 2) {
        color = 0;
    }
    if (color === 0) {
        balloon.style.backgroundColor = "red";
    } else if (color === 1) {
        balloon.style.backgroundColor = "green";
    } else {
        balloon.style.backgroundColor = "blue";
    }
};