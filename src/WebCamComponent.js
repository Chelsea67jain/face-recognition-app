import React,{useRef,useEffect} from 'react'
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';

export default function WebCamComponent() {
    const webcamRef = useRef(null);

    const  detectFaces=async()=> {

      const videoEl = webcamRef.current.video;
      console.log(videoEl);
      
     
       
      const result = await faceapi
        .detectSingleFace(videoEl)
        .withFaceLandmarks()
        .withFaceDescriptor();
      
      if (result) {
        console.log(result);
      }
    
    }

    useEffect(() => {
      const intervalId = setInterval(detectFaces, 100); // Adjust interval as needed
      return () => clearInterval(intervalId);
    }, []);

     useEffect(() => {
       const loadModels = () => {
         Promise.all([
           faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
           faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
           faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
         faceapi.nets.tinyFaceDetector.loadFromUri('/models')

         ]).catch((error) => console.log(error));
       };
       loadModels();
     }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        audio={false}
        height={480}
        width={640}
        videoConstraints={{
          facingMode: "user",
        }}
        screenshotFormat="image/jpeg"
        onUserMediaError={console.error}
      />
      ;
    </div>
  );
}


