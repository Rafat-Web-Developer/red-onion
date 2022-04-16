import React from "react";
import breakfast1 from "../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../images/breakfast/breakfast6.png";
import { Row } from "react-bootstrap";
import SingleFood from "../SigleFood/SingleFood";

const breakfastItems = [
  {
    id: 1,
    name: "Egg Benedict",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: breakfast1,
  },
  {
    id: 2,
    name: "Breakfast Sandwich",
    description: "Good and testy bangladeshi food",
    price: 1000,
    img: breakfast2,
  },
  {
    id: 3,
    name: "Baked Chicken",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: breakfast3,
  },
  {
    id: 4,
    name: "Bagel and cream cheese",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: breakfast4,
  },
  {
    id: 5,
    name: "Full breakfast fried egg toast branch",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: breakfast5,
  },
  {
    id: 6,
    name: "Toast fried egg",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: breakfast6,
  },
];

const Breakfast = () => {
  return (
    <section className="my-5">
      <Row xs={1} md={3} className="g-4">
        {breakfastItems.map((item) => (
          <SingleFood key={item.id} item={item}></SingleFood>
        ))}
      </Row>
    </section>
  );
};

export default Breakfast;
