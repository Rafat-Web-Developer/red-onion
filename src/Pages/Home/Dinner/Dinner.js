import React from "react";
import { Row } from "react-bootstrap";
import dinner1 from "../../../images/dinner/dinner1.png";
import dinner2 from "../../../images/dinner/dinner2.png";
import dinner3 from "../../../images/dinner/dinner3.png";
import dinner4 from "../../../images/dinner/dinner4.png";
import dinner5 from "../../../images/dinner/dinner5.png";
import dinner6 from "../../../images/dinner/dinner6.png";
import SingleFood from "../SingleFood/SingleFood";

const dinnerItems = [
  {
    id: 1,
    name: "Baked Chicken",
    description: "Good and testy bangladeshi food",
    price: 1500,
    img: dinner1,
  },
  {
    id: 2,
    name: "Lemony silmon picata",
    description: "Good and testy bangladeshi food",
    price: 1000,
    img: dinner2,
  },
  {
    id: 3,
    name: "Garlic butter silmon",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: dinner3,
  },
  {
    id: 4,
    name: "Bagel and cream cheese",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: dinner4,
  },
  {
    id: 5,
    name: "Full breakfast fried egg toast branch",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: dinner5,
  },
  {
    id: 6,
    name: "Toast fried egg",
    description: "Good and testy bangladeshi food",
    price: 500,
    img: dinner6,
  },
];

const Dinner = () => {
  return (
    <section className="my-5">
      <Row xs={1} md={3} className="g-4">
        {dinnerItems.map((item) => (
          <SingleFood key={item.id} item={item}></SingleFood>
        ))}
      </Row>
    </section>
  );
};

export default Dinner;
