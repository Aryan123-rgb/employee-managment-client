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
import { registerPage } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

function Signup({ activeComponent, setActiveComponent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const userCredentials = {
      name: name,
      email: email,
      password: password,
      isAdmin: isAdmin,
    };
    dispatch(registerPage(userCredentials));
    navigate("/register");
  };
  return (
    <>
      {activeComponent === "signup" && (
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
                  <p className="text-white-50 mb-3">
                    Please enter your login and password!
                  </p>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
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

                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Register as Admin"
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />

                  <MDBBtn size="lg" onClick={handleRegister}>
                    Sign Up
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
                      onClick={() => setActiveComponent("login")}
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

export default Signup;
