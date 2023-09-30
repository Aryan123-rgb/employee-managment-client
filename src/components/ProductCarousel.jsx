import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/cartSlice";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const { status, products } = useSelector((state) => state.cartReducer);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  let result;
  if (status === "succeeded") {
    result = products.slice(0, 10).map((product) => {
      return {
        ...product,
        qty: 1,
      };
    });
  }

  const [productArray, setProductArray] = useState(result);

  const handleDecrement = (index) => {
    if (productArray[index].qty > 1) {
      productArray[index].qty = productArray[index].qty - 1;
      setProductArray([...productArray]);
    }
  };

  const handleIncrement = (index) => {
    productArray[index].qty = productArray[index].qty + 1;
    setProductArray([...productArray]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {productArray?.map((product, index) => (
        <Card
          key={index}
          style={{
            width: "200px",
            height: "400px",
            backgroundColor: "#f5f6fa",
            margin: "0 4rem",
          }}
        >
          <CardMedia
            component="img"
            alt={product.productName}
            height="240"
            image={product.image}
            style={{
              padding: "10px",
              borderRadius: "5px",
              marginTop: "-10px",
            }}
          />
          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="div">
                {product.productName}
              </Typography>
              <Typography variant="h6" component="div">
                ${product.price}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                justifyContent: "space-between",
              }}
            >
              <button className="custom-button">Add to Cart</button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.81rem",
                }}
              >
                <IconButton
                  color="primary"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </IconButton>
                <Typography variant="body1" component="div">
                  {product.qty}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
