// select the elements
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var btns = document.querySelectorAll("button");
var btn = document.querySelector("button");

// display initial background value
let bg = window.getComputedStyle(body).backgroundImage;
css.textContent = bg + ";";

// converting rgb to hex
function rgbToHex(rgbArr) {
    return "#" + (1 << 24 | rgbArr[0] << 16 | rgbArr[1] << 8 | rgbArr[2]).toString(16).slice(1);
}

// divide the bg string and get the rgb values with regex S
var rgb1 = bg.split('rgb')[1].match(/\d+/g);
var rgb2 = bg.split('rgb')[2].match(/\d+/g);

// then convet to hex and assign to color inputs
color1.value = rgbToHex(rgb1);
color2.value = rgbToHex(rgb2);

// generate a random color when button is pressed
function randomizeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// make 2 random colors at once
function generateRandom() {
    color1.value = "#" + randomizeColor();
    color2.value = "#" + randomizeColor();
    setGradient();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // set background of button
    btn.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // set css text to display the current background
    css.textContent = body.style.background + ";";
}

// make 2 btns for random color
// btns[0].addEventListener("click", function () {
//     color1.value = "#" + randomizeColor();
//     setGradient();
// })
// btns[1].addEventListener("click", function () {
//     color2.value = "#" + randomizeColor();
//     setGradient();
// })
// Make 1 btn for 2 random colors

btn.addEventListener("click", generateRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


