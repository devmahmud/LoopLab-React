import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SignupForm from "./SignupForm";

const HomeSection = () => {
  return (
    <header id="home-section">
      <div className="dark-overlay">
        <Container>
          <Row id="home-inner">
            <Col lg={8} className="d-none d-lg-block">
              <h1 className="display-4">
                Build <strong>social profiles</strong> and gain revenue{" "}
                <strong>profit</strong>
              </h1>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <FontAwesomeIcon icon={["fas", "check"]} size="lg" />
                </div>
                <div className="p-4 align-self end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, labore veniam consequuntur corporis repellat mollitia?
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <FontAwesomeIcon icon={["fas", "check"]} size="lg" />
                </div>
                <div className="p-4 align-self end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, labore veniam consequuntur corporis repellat mollitia?
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <FontAwesomeIcon icon={["fas", "check"]} size="lg" />
                </div>
                <div className="p-4 align-self end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, labore veniam consequuntur corporis repellat mollitia?
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <SignupForm />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HomeSection;
