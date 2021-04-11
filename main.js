var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("txtbox").innerHTML="";
    recognition.start();

}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("txtbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
        speak();
        
    }

    

}
function speak() {
    var swnt = window.speechSynthesis;
    var speek_data = "taking selfie in 10 seconds";
    var utterthis = new SpeechSynthesisUtterance(speek_data);
    swnt.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        tms();
        save();

    },10000);                  
      
}
camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality:90
});
function tms(){
    console.log("tms");
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id = "img"src = "'+data_uri+'"/>';
    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("img").src;
    link.href = image;
    link.click();
}
