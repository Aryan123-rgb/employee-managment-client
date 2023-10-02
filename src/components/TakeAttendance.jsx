import React, { useRef, useState, useEffect } from "react";
import { Button, Grid, Typography, Paper } from "@mui/material";
import Webcam from "webcamjs";

const TakeAttendance = ({ isTakingAttendance, setIsTakingAttendance }) => {
  const videoRef = useRef(null);
  const videoDiv = document.getElementById("videoRef");

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

  useEffect(() => {
    initializeWebcam();
    return () => {
      Webcam.reset();
    };
  }, []);

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
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => setIsTakingAttendance(false)}
          >
            Close Modal
          </Button>
        </div>
      </div>
    </>
  );
};

export default TakeAttendance;
