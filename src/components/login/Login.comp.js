import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const LoginForm = ({
  handelChange,
  email,
  pass,
  handelSubmit,
  frmSwitcher,
}) => {
  return (
    <Container
      style={{
        width: "30%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
      }}
      className="form-box"
    >
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            autoComplete="off"
            onSubmit={handelSubmit}
          >
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handelChange}
                value={email}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handelChange}
                value={pass}
                required
              />
            </Form.Group>
            <Button type="submit" style={{ width: "30%", margin: "5% auto" }}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />

      <a href="#!" onClick={()=>frmSwitcher("reset")}>
        {" "}
        Forget Password?
      </a>
    </Container>
  );
};

LoginForm.propTypes = {
  handelChange: PropTypes.func.isRequired,
  handelSubmit: PropTypes.func.isRequired,
  frmSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
