import React from "react";
import "./Servicebox.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Servicebox = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="d-sm-flex justify-content-between align-items-center mb-2">
              <div>
                <h3 className="font-weight-medium text-dark ">Послуги</h3>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Для дорослих</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card className="service-box">
              <Card.Body>
                <Card.Title className="font-weight-medium title-text">
                  Індивідуальні заняття
                </Card.Title>
                <Card.Subtitle className="subtitle-text mb-4 mt-2">
                  Для дорослих
                </Card.Subtitle>
                <ul className="service-list">
                  <li>Індивідуальні заняття один на один</li>
                  <li>Міні групи до 3-х студентів</li>
                  <li>Індивідуальні консультації по вашому питанню</li>
                </ul>
              </Card.Body>
              <Button>Дізнатися більше</Button>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="service-box">
              <Card.Body>
                <Card.Title className="font-weight-medium title-text">
                  Групові заняття (групи до 8 осіб)
                </Card.Title>
                <Card.Subtitle className="subtitle-text mb-4 mt-2">
                  Для дорослих
                </Card.Subtitle>
                <ul className="service-list">
                  <li>Elementary (A2)</li>
                  <li>Pre-intermediate (A2+)</li>
                  <li>Intermediate (B1)</li>
                  <li>Int+ (B1+)</li>
                  <li>Upper-int (B2)</li>
                  <li>Upper-int+ (B2+)</li>
                </ul>
              </Card.Body>
              <Button>Дізнатися більше</Button>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="service-box">
              <Card.Body>
                <Card.Title className="font-weight-medium title-text">
                  Розмовні клуби на різні теми
                </Card.Title>
                <Card.Subtitle className="subtitle-text mb-4 mt-2">
                  Для дорослих
                </Card.Subtitle>
                <ul className="service-list">
                  <li>Бізнес</li>
                  <li>Подорожі</li>
                  <li>В готелі</li>
                  <li>В ресторані</li>
                  <li>В аеропорту</li>
                  <li>В лікарні</li>
                </ul>
              </Card.Body>
              <Button className="know-more-btn">Дізнатися більше</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Servicebox;
