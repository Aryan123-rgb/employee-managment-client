import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "New Product Name 1", // Updated product name here
    price: 200, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
  {
    name: "New Product Name 2", // Updated product name here
    price: 250, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
  {
    name: "New Product Name 3", // Updated product name here
    price: 220, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
  {
    name: "New Product Name 4", // Updated product name here
    price: 230, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
  {
    name: "New Product Name 4", // Updated product name here
    price: 230, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
  {
    name: "New Product Name 4", // Updated product name here
    price: 230, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
  {
    name: "New Product Name 4", // Updated product name here
    price: 230, // Updated product price here
    imageUrl: "https://loremflickr.com/640/480/abstract",
  },
];

const ProductCarousel = () => {
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
      {products.map((product, index) => (
        <Card
          key={index}
          style={{
            width: "200px",
            height: "400px",
            backgroundColor: "#f5f6fa",
            margin:"0 4rem"
          }}
        >
          <CardMedia
            component="img"
            alt={product.name}
            height="240"
            image={product.imageUrl}
            style={{
              padding: "10px",
              borderRadius: "5px",
              marginTop: "-10px", // Adjust the value as needed
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
                {product.name}
              </Typography>
              <Typography variant="h6" component="div">
                ${product.price}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
              }}
            >
              <button className="custom-button">Add to Cart</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
