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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../logo192.png"
function Footer() {
  const [flag, setFlg] = useState("");
  const sidebar = useRef();
  const [count, setCount] = useState(10);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    
    <Container>
      <img src={img1} ></img>
      <Button onClick={toggle}>Button</Button>
      <Row xs="2">
        <Col className="bg-light border">
          <Card data-aos="zoom-in">
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card data-aos="zoom-in" data-aos-duration="100">
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card data-aos="zoom-in" data-aos-duration="300">
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card data-aos="zoom-in" data-aos-duration="500">
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
        <Col lg={3}>x</Col>
      </Row>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Row xs="1">
        <div className={flag ? "hook5 active" : "hook5"}>
          <div>
            <h1>Flag: {flag ? "True" : "False"}</h1>
            <p>Count: {count}</p>
            <button
              className={flag ? " active" : ""}
              onClick={() => {
                setFlg(!flag);
                sidebar.current.classList.toggle("active");
              }}
            >
              Change
            </button>
            <button
              className=""
              ref={sidebar}
              onClick={() => {
                setCount(count - 1);
                setCount((a) => a - 1);
              }}
            >
              Reduce
            </button>
          </div>
          <div className="meo" ref={sidebar}>
            TEST
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
