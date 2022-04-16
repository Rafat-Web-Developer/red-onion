import React from "react";
import { Col, Card } from "react-bootstrap";

const SingleFood = ({ item }) => {
  const { img, name, description, price } = item;
  return (
    <Col>
      <Card className="p-2">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center mt-4">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p className="fs-6 fw-bold badge bg-danger">{price}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleFood;
