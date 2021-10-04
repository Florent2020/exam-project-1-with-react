import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../img/gallery/1.jpg";
import image2 from "../../img/gallery/2.jpg";
import image3 from "../../img/gallery/3.jpg";
import image5 from "../../img/gallery/5.jpg";
import image6 from "../../img/gallery/6.jpg";
import image7 from "../../img/gallery/7.jpg";
import image9 from "../../img/gallery/9.jpg";
import image10 from "../../img/gallery/10.jpg";

function GalleryImages() {
  return (
    <div id="gallery_spacex">
      <Container>
        <div className="gallery_spacex">
          <h2>International SpaceX Station Gallery</h2>
          <Row>
            <Col xs={12} md={6}>
              <img src={image6} alt="spacex gallery" className="img_60" />
            </Col>
            <Col xs={12} md={6}>
              <img src={image10} alt="spacex gallery" className="img_40" />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2}>
              <img src={image1} alt="spacex gallery" />
            </Col>
            <Col xs={6} md={2}>
              <img src={image2} alt="spacex gallery" />
            </Col>
            <Col xs={6} md={2}>
              <img src={image3} alt="spacex gallery" />
            </Col>
            <Col xs={6} md={2}>
              <img src={image9} alt="spacex gallery" />
            </Col>
            <Col xs={6} md={2}>
              <img src={image5} alt="spacex gallery" />
            </Col>
            <Col xs={6} md={2}>
              <img src={image7} alt="spacex gallery" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default GalleryImages;
