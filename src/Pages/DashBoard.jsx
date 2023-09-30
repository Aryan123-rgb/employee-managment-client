import React from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductCarousel from "../components/ProductCarousel";
import RegisterLog from "../components/RegisterLog";

function DashBoard() {
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{marginLeft:"60px"}}>
          <Typography variant="h4" gutterBottom>
            Welcome Aryan
          </Typography>

          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "1rem" }}
            size="small"
          >
            Take Attendance
          </Button>
        </div>

        <div style={{ marginRight: "20px" }}>
          <div style={{ height: "150px", padding: "10px" }}>
            <RegisterLog />
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "2rem",
          marginRight: "2rem",
        }}
      >
        <div style={{ marginRight: "1rem" }}>
          <TextField
            label="Search Products"
            variant="outlined"
            size="small"
            style={{ marginBottom: "0.5rem", marginRight: "2rem" }}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </div>
        <ShoppingCartIcon fontSize="large" />
      </div>

      <ProductCarousel />
    </div>
  );
}

export default DashBoard;
