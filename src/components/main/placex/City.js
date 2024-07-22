import React, { useState } from "react";
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
function City(props) {
    const {item} = props
    console.log(item)
  return (
    <div>
      <Col className="bg-light">
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
            <CardText>{item.price}</CardText>
            <CardText>Stars</CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default City;
