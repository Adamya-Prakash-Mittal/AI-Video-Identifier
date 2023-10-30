var C;
var V;
var M;
var RU;
var i;
var O;
var OC;
var OH;
var OW;
var OX;
var OY;
var status="";
function preload(){
    V= createVideo("video.mp4");

}
function setup(){
    C= createCanvas(600, 400);
    C.center();
    V.hide();
    M= ml5.objectDetector('cocossd', ML);
   
}
function draw(){
    M.detect(V, GR);
    document.getElementById("F").innerHTML="Status: Analizing Objects!";
    image(V, 0, 0, 600, 400);
    V.speed(1);
    V.volume(0);
    V.loop();
    if(status=="true"){
    for(i=0; i<RU.length; i++){
        O=RU[i].label;
        OC=RU[i].confidence;
        OH=RU[i].height;
        OW=RU[i].width;
        OX=RU[i].x;
        OY=RU[i].y;
        stroke("red");
        fill("red");
        console.log(O, OX, OY, OW, OH);
        noFill();
        strokeWeight(5);
        rect(OX, OY, OW, OH);
        strokeWeight(1);
        text(O, OX, OY+10);
    }
}
}
function ML(){
    console.log("d");
    document.getElementById("F").innerHTML="Status: Model loaded!";
}
function GR(E, R){
    RU=R;
    console.log(RU);
    status="true";
    console.log(status);
    document.getElementById("F").innerHTML="Status:"+RU.length+" Objects Detected!";
}