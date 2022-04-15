import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import wycusImage1 from "../../../images/adult-blur-blurred-background-687824.png";
import wycusImage2 from "../../../images/chef-cook-food-33614.png";
import wycusImage3 from "../../../images/architecture-building-city-2047397.png";

const WhyYouChooseUs = () => {
  return (
    <section className="py-5">
      <Container>
        <h3 className="mb-5 display-6">Why you choose us</h3>
        <Row>
          <Col md="4">
            <img src={wycusImage1} alt="" className="img-fluid" />
          </Col>
          <Col md="4">
            <img src={wycusImage2} alt="" className="img-fluid" />
          </Col>
          <Col md="4">
            <img src={wycusImage3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyYouChooseUs;
