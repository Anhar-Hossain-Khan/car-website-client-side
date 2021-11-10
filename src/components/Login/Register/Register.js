import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const { getName, signup, getEmail, getPassword, error } = useAuth();
    return (
        <div className="text-center text-white">
        <h2 className="text-warning">Please Sign Up </h2>
        <p className="text-danger text-center">{error}</p>
        <div className="w-25 mx-auto">
          <Form onSubmit={signup}>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Name
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    required
                    type="text"
                    placeholder="Enter your name"
                    onBlur={getName}
                    id="name"
                    autoComplete="current-name"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    required
                    type="email"
                    placeholder="Enter Email"
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
              Sign Up
            </button>
          </Form>
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/login">
            Already have account ? Please Login!
          </NavLink>
        </p>
      </div>
    );
};

export default Register;