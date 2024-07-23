import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./city.css"
function City(props) {
    const {item} = props
    console.log(item)
    useEffect(() => {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
    }, []);
  return (
    <div className="Anim">
      <Col className="bg-light" data-aos="zoom-in">
        {/* <Card data-aos="zoom-in"> */}
        <Card className="mt-4 rounded">
          <div className="imgbox">
            <img alt="Sample" src={item.img} />
          </div>
          <CardBody>
            <CardTitle className="Iconbefore text-muted" tag="h6">
              {item.category}
            </CardTitle>
            <CardSubtitle className="mt-2 mb-2" tag="h5">
              {item.title}
            </CardSubtitle>
            <CardText className="cardtext">{item.price}</CardText>
            <CardText>Stars</CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default City;
