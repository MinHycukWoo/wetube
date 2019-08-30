const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecodeBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
    console.log(event);
    const {data: videoFile } = event;
    const link = document.createElement("a");
    link.href = URL.createObject(videoFile);
    link.download ="recorded.webm";
    document.body.appendChild(link);
    link.click();

}

const stopRecording =() => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click",stopRecording);
    recordBtn.addEventListener("click",getVideo);
    recordBtn.innerHTML = "Start recording";
}

const startRecording = (stream) =>{
    videpRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click",stopRecording);
}


const getVideo= async() => {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:{width:1280, height: 720}
        });
        videoPreview.secObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = "Stop recording";
        streamObject = stream;
        startRecording(stream);
    }catch(error){
        recordBtn.innerHTML = ":( Cant Record";
    }finally{
        recordBtn.removeEventListener("click",getVideo);
    }
}

function init(){
    recordBtn.addEventListener("click",getVideo);
}

if(recorderContainer) {
    init();
}