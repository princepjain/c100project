var sr = window.webkitSpeechRecognition
var r = new sr

function start(){
    document.getElementById("ta").innerHTML = " "

    r.start()
    uttering()  
}
 
r.onresult = function(pm){
    console.log(pm)

    content = pm.results[0][0].transcript
document.getElementById("ta").innerHTML = content
}

function uttering(){
    var sy = window.speechSynthesis
    var bringtextfromtextarea = "taking selfie in 5 seconds"
    var utter = new SpeechSynthesisUtterance(bringtextfromtextarea)
    sy.speak(utter)
   Webcam.attach(togetcamera)

  
   setTimeout(function() {
       img_id = "selfie1"
   snapshot()
   bringtextfromtextarea = "taking your next selfie in 10 seconds"
   var utter = new SpeechSynthesisUtterance(bringtextfromtextarea)
   sy.speak(utter)        
}  ,5000   ) 



setTimeout(function() {
    img_id = "selfie2"
snapshot()
bringtextfromtextarea = "taking your next selfie in 15 seconds"
var utter = new SpeechSynthesisUtterance(bringtextfromtextarea)
sy.speak(utter)        
}  ,10000   ) 





setTimeout(function() {
    img_id = "selfie3"
snapshot()
bringtextfromtextarea = "taking your next selfie in 20 seconds"
var utter = new SpeechSynthesisUtterance(bringtextfromtextarea)
sy.speak(utter)        
}  ,15000   ) 



   }
   



Webcam.set({
    width: 360,
    height: 250,
    image_format:"png",
    png_quality:90


})

var togetcamera = document.getElementById("webcam")


function snapshot(){
    Webcam.snap(function(data){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data+"'>"}
            if(img_id == "selfie2"){
                document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data+"'>"}
                if(img_id == "selfie3"){
                    document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data+"'>"}    
        
    })  
} 


