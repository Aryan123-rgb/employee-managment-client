import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductCarousel from "../components/ProductCarousel";
import RegisterLog from "../components/RegisterLog";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  const cartItemCount = useSelector((state) => state.cartReducer.carts?.length);

  const goToCartPage = () => {
    if (cartItemCount === 0) {
      alert("Cart is currently empty");
    } else navigate("/cart");
  };
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
        <div style={{ marginLeft: "60px" }}>
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
        <ShoppingCartIcon sx={{cursor:'pointer'}} onClick={goToCartPage} fontSize="large" />
        {cartItemCount > 0 && (
          <div
            style={{
              position: "absolute",
              top: "46%",
              left: "96%",
              background: "#e74c3c",
              borderRadius: "50%",
              padding: "4px 8px",
              color: "white",
              fontSize: "9px",
              cursor:'pointer'
            }}
            onClick={goToCartPage}
          >
            {cartItemCount}
          </div>
        )}
      </div>

      <ProductCarousel />
    </div>
  );
}

export default DashBoard;
