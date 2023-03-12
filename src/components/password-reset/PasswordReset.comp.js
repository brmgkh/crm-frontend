import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const ResetPassword = ({
  handelChange,
  email,
  handelResetSubmit,
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
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            autoComplete="off"
            onSubmit={handelResetSubmit}
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

            <Button type="submit" style={{ width: "30%", margin: "5% auto" }}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />

      <a href="#!" onClick={() => frmSwitcher("login")}>
        {" "}
        Login Now
      </a>
    </Container>
  );
};

ResetPassword.propTypes = {
  handelChange: PropTypes.func.isRequired,
  handelResetSubmit: PropTypes.func.isRequired,
  frmSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
