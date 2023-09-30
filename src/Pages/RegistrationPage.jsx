import React, { useRef, useState, useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Webcam from "webcamjs";

const RegistrationPage = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const initializeWebcam = () => {
    Webcam.set({
      width: 480, // Adjusted width
      height: 360, // Adjusted height
      dest_width: 640,
      dest_height: 480,
      image_format: "jpeg",
      jpeg_quality: 90,
    });
    Webcam.attach(videoRef.current);
  };

  const captureImage = () => {
    Webcam.snap((data_uri) => {
      setCapturedImage(data_uri);
    });
  };

  const retakeImage = () => {
    setCapturedImage(null);
    initializeWebcam();
  };

  useEffect(() => {
    initializeWebcam();
    return () => {
      Webcam.reset();
    };
  }, []);

  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh", marginTop: "20px" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Welcome Aryan
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            Take your photo in a clear background and make sure your face is
            properly visible and your eyes are facing the camera
          </Typography>
        </Grid>
        <Grid item>
          <div ref={videoRef}></div>
        </Grid>
        <Grid item container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={captureImage}>
              Capture Image
            </Button>
          </Grid>
          {capturedImage && (
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={retakeImage}
                sx={{ marginLeft: 1 }}
              >
                Retake Image
              </Button>
            </Grid>
          )}
        </Grid>
        {capturedImage && (
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Captured Image:
            </Typography>
            <img
              src={capturedImage}
              alt="Captured"
              style={{ width: "240px", height: "180px" }}
            />
          </Grid>
        )}
        {capturedImage && (
          <Grid item container justifyContent="center" marginTop="10px">
            <Button variant="contained" color="primary">
              Continue
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default RegistrationPage;