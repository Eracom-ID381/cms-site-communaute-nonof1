let butterfly;
let cursor;

function preload() {
    butterfly = loadImage("./assets/images/butterfly.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    cursor = butterfly;
}

function draw() {
    image(cursor, mouseX, mouseY, 35, 35);
}