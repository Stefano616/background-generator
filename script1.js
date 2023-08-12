// Element selectors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var btns = document.querySelectorAll("button");
var btnRand = document.getElementById("randBtn");
const btnsTurn = document.querySelectorAll(".turnBgBtn");

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

// define the gradient angle
let bgAngle = 90;

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
    body.style.background = "linear-gradient(" + bgAngle + "deg, " + color1.value + ", " + color2.value + ")";
    // set background of button
    btnRand.style.background = "linear-gradient(" + bgAngle + "deg, " + color1.value + ", " + color2.value + ")";
    // set css text to display the current background
    css.textContent = body.style.background + ";";
}

// make 2 btnRands for random color
// btnRands[0].addEventListener("click", function () {
//     color1.value = "#" + randomizeColor();
//     setGradient();
// })
// btnRands[1].addEventListener("click", function () {
//     color2.value = "#" + randomizeColor();
//     setGradient();
// })

// Make buttons for turning the gradient direction
btnsTurn[0].addEventListener("click", () => {
    bgAngle += 22.5;
    bgAngle === 382.5 ? bgAngle = 22.5 : bgAngle;
    setGradient();
});

btnsTurn[1].addEventListener("click", () => {
    bgAngle -= 22.5;
    bgAngle === -22.5 ? bgAngle = 337.5 : bgAngle;
    setGradient();
});

// Make 1 btnRand for 2 random colors
btnRand.addEventListener("click", generateRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


