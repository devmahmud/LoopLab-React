import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateImage from "../../img/create-section1.jpg";

const CreateSection = () => {
  return (
    <React.Fragment>
      <section id="create-head-section" className="py-5 text-center bg-primary">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Create</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                doloribus placeat, incidunt odit aliquam sint magni dolorem
                neque dicta minima nihil ullam deserunt beatae in labore
                necessitatibus veniam alias maxime.
              </p>
              <a href="javascipt:void(0)" className="btn btn-outline-light">
                Find Out More
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="create-section" className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Create Your Passion</h3>
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
                src={CreateImage}
                alt="Create"
                className="img-fluid mb-3 rounded-circle"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CreateSection;
