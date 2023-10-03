import React, { useRef, useState, useEffect } from "react";
import { Button, Grid, Typography, Paper } from "@mui/material";
import Webcam from "webcamjs";
import * as faceapi from "face-api.js";
import { useDispatch, useSelector } from "react-redux";
import { markPresent } from "../redux/features/userSlice";

const TakeAttendance = ({ isTakingAttendance, setIsTakingAttendance }) => {
  const videoRef = useRef(null);
  const videoDiv = document.getElementById("videoRef");
  const referencedImage = useSelector((state) => state.userReducer.image);
  const [capturedImage, setCapturedImage] = useState(null);
  const dispatch = useDispatch();

  const initializeWebcam = () => {
    Webcam.set({
      width: 480,
      height: 360,
      dest_width: 640,
      dest_height: 480,
      image_format: "jpeg",
      jpeg_quality: 90,
    });
    Webcam.attach(videoRef?.current);
  };

  const captureImage = () => {
    Webcam.snap((data_uri) => {
      setCapturedImage(data_uri);
    });
    compareImages();
  };

  useEffect(() => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    ]).then(initializeWebcam());
    return () => {
      Webcam.reset();
    };
  }, []);

  const compareImages = async () => {
    const capturedImageElement = document.createElement("img");
    const referencedImageElement = document.createElement("img");

    capturedImageElement.onerror = () => {
      console.log("Error loading captured image.");
      alert("Error loading captured image.");
    };

    referencedImageElement.onerror = () => {
      console.log("Error loading referenced image.");
      alert("Error loading referenced image.");
    };

    await Promise.all([
      new Promise((resolve) => {
        capturedImageElement.onload = resolve;
        capturedImageElement.src = capturedImage;
      }),
      new Promise((resolve) => {
        referencedImageElement.onload = resolve;
        referencedImageElement.src = referencedImage;
      }),
    ]);

    try {
      const capturedFace = await faceapi
        .detectSingleFace(capturedImageElement)
        .withFaceLandmarks()
        .withFaceDescriptor();

      const referencedFace = await faceapi
        .detectSingleFace(referencedImageElement)
        .withFaceLandmarks()
        .withFaceDescriptor();

      console.log("Captured Face:", capturedFace);
      console.log("Referenced Face:", referencedFace);

      if (referencedFace && capturedFace) {
        const faceMatcher = new faceapi.FaceMatcher([
          referencedFace.descriptor,
        ]);
        const match = faceMatcher.findBestMatch(capturedFace.descriptor);
        console.log(match);

        if (match.distance > 0.3) {
          alert(`Face Matched `);
          dispatch(markPresent());
        } else alert("Face didn't matched");
      } else {
        alert(
          "Please try again. Keep your head in the center and look directly into the camera while snapping the image"
        );
      }
    } catch (error) {
      alert("An error occurred during face detection.");
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          display: isTakingAttendance === true ? "flex" : "none",
        }}
      >
        <div id="videoRef" ref={videoRef}></div>
        <div
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <div ref={videoRef}></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginInline: "1rem",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem", backgroundColor: "green" }}
              onClick={captureImage}
            >
              Mark as Present
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem", backgroundColor: "red" }}
              onClick={() => setIsTakingAttendance(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeAttendance;
