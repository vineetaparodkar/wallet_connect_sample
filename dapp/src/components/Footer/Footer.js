import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="Footer">Copyright XYZ 2022 All Rights Reserved</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
