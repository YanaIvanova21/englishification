import React from "react";
import "./CourseContent.css";
import CourseContentItem from "./CourseContentItem";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const CourseContent = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={6}>
            <h3 className="font-weight-medium text-dark">Що буде на курсі?</h3>
            <CourseContentItem description="Пробне заняття для визначення рівня"></CourseContentItem>
            <CourseContentItem description="2 заняття на тиждень по 90 хвилин або 3 заняття по 60 хвилин"></CourseContentItem>
            <CourseContentItem description="Бонусні розмовні клуби 1 раз на два тижні"></CourseContentItem>
            <CourseContentItem description="Безкоштовні індивідуальні консультації з викладачем 20-30 хв"></CourseContentItem>
            <CourseContentItem description="Інтерактивні вправи на різних онлайн-платформах"></CourseContentItem>
            <CourseContentItem description="Заняття на платформі Zoom"></CourseContentItem>
            <CourseContentItem description="Один музичний /фільм клуб на місяць (за вашим бажанням), де ми слухаємо пісні чи дивимось уривки фільмів, а потім опрацьовуємо лексику і граматику, яка в них зустрічається"></CourseContentItem>
          </Col>
          <Col sm={6}>
            <img
              src="images/courseplan.png"
              alt="courseplan"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CourseContent;
