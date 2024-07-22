import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import "./home.css";
import Places from "./placex/Places";
let arr = [
  { name: "New York" },
  { name: "London" },
  { name: "Tokyo" },
  { name: "Los Angeles" },
];

function Main() {
  const sidebar = useRef();
  const [flag, setFlg] = useState("");
  // let buttons =document.querySelectorAll(button)
  function handle(index) {
    // buttons[index]
  }
  return (
    <>
      <Container className="bg-light border" fluid>
        <Container className="text-center">
          <h1 className="Big-title">Perfect destination</h1>
          <h2 className="h2title">Trending destinations</h2>
        </Container>
        <Container className="text-center">
          {arr &&
            arr.map((item, index) => (
              <button
                className="btn"
                ref={sidebar}
                key={index}
                onClick={() => {
                  
                  setFlg(!flag);
                  sidebar.current.classList.remove("active");
                  // sidebar.current.classList.add("active")
                  sidebar.current.classList.add("active");
                }}
              >
                {item.name}
              </button>
            ))}
        </Container>
        <Places></Places>
      </Container>
    </>
  );
}

export default Main;
