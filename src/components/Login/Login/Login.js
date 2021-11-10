import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, signInWithEmail, setUser, setError, getEmail, getPassword, error } 
    = useAuth();
    
      const history = useHistory();
      const location = useLocation();
      const redirect = location?.state?.from || "/";
    return (
        <div className="text-center text-white">
        <h2 className="text-warning">Login </h2>
        <p className="mt-2">Enter Your valid Email & Password</p>
        <p className="text-danger text-center">{error}</p>
        <div className="w-25 mx-auto">
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              signInWithEmail()
                .then((result) => {
                  setUser(result.user);
                  history.push(redirect);
                })
                .catch((err) => {
                  setError(err.message);
                });
            }}
          >
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    onBlur={getEmail}
                    id="email"
                    autoComplete="current-email"
                  />
                </InputGroup>
              </Col>
            </Row>
  
            <Row className="mt-2">
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    type="password"
                    placeholder="Enter Password"
                    onBlur={getPassword}
                    id="password"
                    autoComplete="current-password"
                  />
                </InputGroup>
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Login
            </button>
          </Form>
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/register">
            Create an Account ? Please Sign Up !
          </NavLink>
        </p>
        <br />
        <div>
          <button onClick={() => { 
                signInUsingGoogle()
                .then((result) => {
                  setUser(result.user);
                  history.push(redirect);
                })
                .catch((err) => {
                  setError(err.message);
                });
            }}
            className="btn btn-warning"> SignIn With Google </button>
        </div>
      </div>
    );
};

export default Login;