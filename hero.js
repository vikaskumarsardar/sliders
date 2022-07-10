let i = 0;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");
let box5 = document.getElementById("image5");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");

a1.onclick = function () {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    i = 0;
}

a2.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    i = 1;
}

a3.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    i = 2;
}

a4.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    box5.style.opacity = 0;
    i = 3;
}
a5.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 1;
    i = 4;
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        right();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        right();
    }
});

function right() {
    console.log("clicked", i);


    if (i == 0) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
    }
    else if (i == 2) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
    }
    else if (i == 3) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        box5.style.opacity = 0;
        i++;
    }
    else if (i == 4) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 1;
        i = 0;
    }
}

function left() {
    console.log("clicked", i);

    if (i == 0) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 1;
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        box5.style.opacity = 0;
        i++
    }
    else if (i == 2) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 3;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
    }
    else if (i == 3) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++;
    }
    else if (i == 4) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i = 0;
    }
}
