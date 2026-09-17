let size = 200;
let color = 0;

$("#balloon").click(function() {
    size = size + 10;

    if (size > 420) {
        size = 200;
    }

    $("#balloon").css({
        width: size + "px",
        height: size + "px"
    });

    color = color + 1;

    if (color > 2) {
        color = 0;
    }

    if (color === 0) {
        $("#balloon").css("background-color", "red");
    } else if (color === 1) {
        $("#balloon").css("background-color", "green");
    } else {
        $("#balloon").css("background-color", "blue");
    }
});

$("#balloon").mouseleave(function() {
    size = size - 5;

    if (size < 200) {
        size = 200;
    }

    $("#balloon").css({
        width: size + "px",
        height: size + "px"
    });

    color = color - 1;

    if (color < 0) {
        color = 2;
    }

    if (color === 0) {
        $("#balloon").css("background-color", "red");
    } else if (color === 1) {
        $("#balloon").css("background-color", "green");
    } else {
        $("#balloon").css("background-color", "blue");
    }
});