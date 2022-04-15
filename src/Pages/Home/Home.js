import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import Breakfast from "./Breakfast/Breakfast";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";
import WhyYouChooseUs from "./WhyYouChooseUs/WhyYouChooseUs";

const Home = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);

  const handleBreakfast = () => {
    setLunch(false);
    setDinner(false);
    setBreakfast(true);
  };
  const handleLunch = () => {
    setBreakfast(false);
    setDinner(false);
    setLunch(true);
  };
  const handleDinner = () => {
    setBreakfast(false);
    setLunch(false);
    setDinner(true);
  };

  return (
    <div>
      <Banner></Banner>
      <section>
        <Container>
          <div className="d-flex justify-content-center">
            <Button
              variant={breakfast ? "danger" : ""}
              id="button-addon2"
              className="rounded-pill me-1 fw-bold"
              onClick={handleBreakfast}
            >
              Breakfast
            </Button>
            <Button
              variant={lunch ? "danger" : ""}
              id="button-addon2"
              className="rounded-pill me-1 fw-bold"
              onClick={handleLunch}
            >
              Lunch
            </Button>
            <Button
              variant={dinner ? "danger" : ""}
              id="button-addon2"
              className="rounded-pill fw-bold"
              onClick={handleDinner}
            >
              Dinner
            </Button>
          </div>
          <div>
            {breakfast && <Breakfast></Breakfast>}
            {lunch && <Lunch></Lunch>}
            {dinner && <Dinner></Dinner>}
          </div>
        </Container>
      </section>
      <WhyYouChooseUs></WhyYouChooseUs>
    </div>
  );
};

export default Home;
