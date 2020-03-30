import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShareImage from "../../img/share-section1.jpg";

const ShareSection = () => {
  return (
    <React.Fragment>
      <section id="share-head-section" className="py-5 text-center bg-dark">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Share</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                doloribus placeat, incidunt odit aliquam sint magni dolorem
                neque dicta minima nihil ullam deserunt beatae in labore
                necessitatibus veniam alias maxime.
              </p>
              <a href="javascipt:void(0)" className="btn btn-outline-secondary">
                Find Out More
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="share-section" className="bg-light text-muted py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Share What You Create</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                autem adipisci, nulla quis nihil ad aspernatur distinctio ipsam
                magni amet eius non ea pariatur architecto suscipit voluptatibus
                ullam, illum sit?
              </p>
              <div className="d-flex">
                <div className="p-4 self-align-start">
                  <FontAwesomeIcon icon={["fas", "check"]} className="fa-2x" />
                </div>
                <div className="p-4 self-align-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia aut sunt laudantium ducimus iusto fugiat.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 self-align-start">
                  <FontAwesomeIcon icon={["fas", "check"]} className="fa-2x" />
                </div>
                <div className="p-4 self-align-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia aut sunt laudantium ducimus iusto fugiat.
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={ShareImage}
                alt="Share"
                className="img-fluid mb-3 rounded-circle"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ShareSection;
