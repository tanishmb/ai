function setup(){
    canvas=createCanvas(400,370);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
}
function start(){
    Objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: object detecting ";
    document.getElementById("input").value;
}
function modelLoaded(){
    console.log("model loaded");  
    status=true;
}
function draw(){
    image(video,0,0,400,400)
}