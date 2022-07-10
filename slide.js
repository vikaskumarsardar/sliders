let i = 1;

const boxes = [];
boxes[1] = document.getElementById("image1");
boxes[2] = document.getElementById("image2");
boxes[3] = document.getElementById("image3");
boxes[4] = document.getElementById("image4");
boxes[5] = document.getElementById("image5");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");

const imageDiv = document.getElementsByClassName('img')
boxes[1].style.opacity = 1;
const setOpacityToZero = () => {
    for (let i = 0; i < imageDiv.length; i++) {
        imageDiv[i].style.opacity = 0
    }
}
a1.onclick = function () {
    setOpacityToZero()
    boxes[1].style.opacity = 1;
    i = 1
}
a2.onclick = function () {
    setOpacityToZero()
    boxes[2].style.opacity = 1;
    i = 2
}
a3.onclick = function () {
    setOpacityToZero()
    boxes[3].style.opacity = 1;
    i = 3
}
a4.onclick = function () {
    setOpacityToZero()
    boxes[4].style.opacity = 1;
    i = 4
}
a5.onclick = function () {
    setOpacityToZero()
    boxes[5].style.opacity = 1;
    i = 5
}
function right() {
    if (i >= 5) i = 0;
    setOpacityToZero()
    boxes[i + 1].style.opacity = 1
    ++i
}
function left() {
    if (i <= 1) i = 5;
    setOpacityToZero()
    boxes[i - 1].style.opacity = 1
    --i
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