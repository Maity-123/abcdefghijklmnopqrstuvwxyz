function setup() {
    video = createCapture(VIDEO);
    video.size(500,550);
canvas = createCanvas(550,500);
canvas.position(500,100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log('Posenet Is Initialized! ');
}



function draw() {
    background('#969A97');

}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}
