Baari="";
Meri_Ammi="";

function preload(){
Baari=loadSound('Baari_1.mp3');
Meri_Ammi=loadSound('Meri_Pyaari_Ammi.mp3');
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,model_Loaded);
posenet.on("pose", gotPoses);
}

function model_Loaded(){
console.log("Model Loaded");
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill('#ff00000');
    stroke('#fff000');
}

function gotPoses(results){

}