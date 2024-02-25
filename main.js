Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_image").src = data_uri
    })
    
}
console.log("ml5 version = ",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/huCQ_wxQM/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelIsLoaded")
}
function check(){
    img = document.getElementById("selfie_image")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    document.getElementById("object").innerHTML = results[0].label
    document.getElementById("confidence").innerHTML = (results[0].confidence).toFixed(2)
}
}
