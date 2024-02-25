import "./App.css";
import { useEffect } from "react";
import * as faceapi from 'face-api.js'
import WebCamComponent from "./WebCamComponent";

function App() {
  const startWebCam = () => {
    // alert("hi");
    // const video = document.getElementById("video");

    // navigator.mediaDevices
    //   .getUserMedia({
    //     video: true,
    //     audio: false,
    //   })
    //   .then((stream) => {
    //     video.srcObject = stream;
    //     console.log(video.srcObject);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

 

  return (
    <div className="container">
      <WebCamComponent />
      {/* <video id="video" width="600" height="600" /> */}
    </div>
  );
}

export default App;
