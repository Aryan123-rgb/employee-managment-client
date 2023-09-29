import React, { useState } from "react";
import { Button, TextField, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const OrLine = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
  "&::before, &::after": {
    content: '""',
    flex: 1,
    borderBottom: "1px solid #ccc",
  },
  "&::before": {
    marginRight: "0.5em",
  },
  "&::after": {
    marginLeft: "0.5em",
  },
});

const Signup = ({ activeComponent, setActiveComponent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <>
      {activeComponent === "signup" && (
        <CenteredContainer maxWidth="sm">
          <form onSubmit={handleSignup}>
            <Typography variant="h4" align="center">
              Create your account
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                color: "#fff",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Sign Up
            </Button>
            <Typography sx={{ textAlign: "center", margin: "5px" }}>
              Already have an account?{" "}
              <span
                onClick={() => setActiveComponent("login")}
                style={{ color: "#4285f4", cursor: "pointer" }}
              >
                Login
              </span>
            </Typography>
            <OrLine>
              <Typography variant="body1">or</Typography>
            </OrLine>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              marginTop={2}
            >
              <Grid item>
                <Button
                  variant="contained"
                  style={{
                    width: "100%",
                    backgroundColor: "#4285F4",
                    color: "#fff",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  startIcon={<GoogleIcon />}
                >
                  Continue with Google
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              marginTop={2}
            >
              <Grid item>
                <Button
                  variant="contained"
                  style={{
                    width: "100%",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  startIcon={<GitHubIcon />}
                >
                  Continue with GitHub
                </Button>
              </Grid>
            </Grid>
          </form>
        </CenteredContainer>
      )}
    </>
  );
};

export default Signup;
