import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/features/userSlice";

function Login({ activeComponent, setActiveComponent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { email, password };
    const response = dispatch(loginUser(userData));
  };
  return (
    <>
      {activeComponent === "login" && (
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Login</h2>
                  <p className="text-white-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <MDBBtn size="lg" onClick={handleLogin}>
                    Login
                  </MDBBtn>

                  <hr className="my-4" />

                  <MDBBtn
                    className="mb-2 w-100"
                    size="lg"
                    style={{ backgroundColor: "#dd4b39" }}
                  >
                    <MDBIcon fab icon="google" className="mx-2" />
                    continue with google
                  </MDBBtn>

                  <MDBBtn
                    className="mb-4 w-100"
                    size="lg"
                    style={{ backgroundColor: "#000000" }}
                  >
                    <MDBIcon fab icon="github" className="mx-2" />
                    continue with GitHub
                  </MDBBtn>
                  <p style={{ textAlign: "center" }}>
                    Don't have an account?
                    <span
                      onClick={() => setActiveComponent("signup")}
                      style={{ cursor: "pointer", color: "#3b71ca" }}
                    >
                      {" "}
                      Sign Up
                    </span>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </>
  );
}

export default Login;
