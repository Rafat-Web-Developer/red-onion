import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner mt-3 mb-5">
      <Container>
        <div className="text-center">
          <h1 className="mb-4">Best Food waiting for your belly</h1>
          <InputGroup className="mb-3 rafat-input-field-width mx-auto">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="rounded-pill me-1"
            />
            <Button
              variant="danger"
              id="button-addon2"
              className="rounded-pill"
            >
              Button
            </Button>
          </InputGroup>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
