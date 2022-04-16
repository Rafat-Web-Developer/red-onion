import React from "react";
import { Row } from "react-bootstrap";
import lunch1 from "../../../images/lunch/lunch1.png";
import lunch2 from "../../../images/lunch/lunch2.png";
import lunch3 from "../../../images/lunch/lunch3.png";
import lunch4 from "../../../images/lunch/lunch4.png";
import lunch5 from "../../../images/lunch/lunch5.png";
import lunch6 from "../../../images/lunch/lunch6.png";
import SingleFood from "../SingleFood/SingleFood";

const lunchItems = [
  {
    id: 1,
    name: "Healthy Meal Plan",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: lunch1,
  },
  {
    id: 2,
    name: "Fried Chicken Branto",
    description: "Good and testy bangladeshi food",
    price: 1000,
    img: lunch2,
  },
  {
    id: 3,
    name: "Baked Chicken",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: lunch3,
  },
  {
    id: 4,
    name: "Bagel and cream cheese",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: lunch4,
  },
  {
    id: 5,
    name: "Beef Stick",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: lunch5,
  },
  {
    id: 6,
    name: "Toast fried egg",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: lunch6,
  },
];

const Lunch = () => {
  return (
    <section className="my-5">
      <Row xs={1} md={3} className="g-4">
        {lunchItems.map((item) => (
          <SingleFood key={item.id} item={item}></SingleFood>
        ))}
      </Row>
    </section>
  );
};

export default Lunch;
