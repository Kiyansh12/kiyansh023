function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    circle(320, 190, 70);
}
function take_snapshot(){
    save('myFilterImage.png');
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function createCanvas() {
    createCanvas(400, 400);
}