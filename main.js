function preload() {
    mousthache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 250);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 250);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 250);
    image(mousthache, noseX - 25, noseY - 8, 50, 40);
}

function take_snapshot() {
    save('my_moustache_filter.png');
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}
noseX = 0;
noseY = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
