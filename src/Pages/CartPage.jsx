import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  emptyCart,
  incrementQty,
  removeFromCart,
  saveProductsofCart,
} from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";

export default function CartPage() {
  const { carts } = useSelector((state) => state.cartReducer);
  const { email } = useSelector((state) => state.userReducer);
  let totalPrice = 0;
  carts.map((product) => {
    totalPrice += product.qty * product.price;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section
      className="h-custom"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {carts?.length} items
                        </MDBTypography>
                      </div>
                      <hr className="my-4" />

                      {carts?.map((product, index) => (
                        <>
                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={product.image}
                                fluid
                                className="rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {product.productName}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.81rem",
                                }}
                              >
                                <IconButton
                                  color="primary"
                                  onClick={() =>
                                    dispatch(decrementQty(product))
                                  }
                                >
                                  -
                                </IconButton>
                                <Typography variant="body1" component="div">
                                  {product.qty}
                                </Typography>
                                <IconButton
                                  color="primary"
                                  onClick={() =>
                                    dispatch(incrementQty(product))
                                  }
                                >
                                  +
                                </IconButton>
                              </div>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                $ {product.price}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <p
                                className="text-muted"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  dispatch(removeFromCart(product))
                                }
                              >
                                <MDBIcon fas icon="times" />
                              </p>
                            </MDBCol>
                          </MDBRow>

                          <hr className="my-4" />
                        </>
                      ))}

                      <div
                        className="pt-5"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText
                            className="text-body"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/dashboard")}
                          >
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                        <MDBBtn
                          onClick={() => dispatch(emptyCart())}
                          style={{ backgroundColor: "red" }}
                          size="lg"
                        >
                          Empty Cart
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total Items
                        </MDBTypography>
                        <MDBTypography tag="h5">{carts?.length}</MDBTypography>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">$ {totalPrice}</MDBTypography>
                      </div>

                      <MDBBtn
                        color="dark"
                        block
                        size="lg"
                        onClick={() =>
                          dispatch(saveProductsofCart({carts, email}))
                        }
                      >
                        Save
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
