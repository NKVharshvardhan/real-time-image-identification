function preload(){

}

function setup(){
var canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qMLflf0Tg/model.json",modelLoaded);
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotresult);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotresult(error,results){
if(error)
{
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result-object-name").innerHTML=results[0].label;
    document.getElementById("result-object-accuracy").innerHTML=results[0].confidence.toFixed(3);

}
}