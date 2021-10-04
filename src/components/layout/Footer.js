import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "../../img/logo.png";
import Falcon from "../../img/falcon.png";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <Container>
          <Row>
            <Col xs={4} md={4} className="footer">
              <Image src={Logo} className="logo" alt="logo" />
            </Col>
            <Col xs={4} md={4} className="footer falcon">
              <Image src={Falcon} alt="falcon" />
            </Col>
            <Col xs={4} md={4} className="footer social__media">
              <Nav className="flex-column">
                <Nav.Link href="https://twitter.com/SpaceX" target="_blank">
                  Twitter
                </Nav.Link>
                <Nav.Link
                  eventKey="https://www.instagram.com/spacex/?hl=en"
                  target="_blank"
                >
                  Instagram
                </Nav.Link>
                <Nav.Link
                  eventKey="https://www.youtube.com/spacex"
                  target="_blank"
                >
                  Youtube
                </Nav.Link>
                <Nav.Link
                  eventKey="https://www.flickr.com/photos/spacex/"
                  target="_blank"
                >
                  Flickr
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <hr className="blue_line" />
          <div className="develop_author">
            <span>Design & Development by Florent Hajdari</span>
            <div className="copy_rights">
              <Image src={Logo} alt="logo" />
              <span>&copy;2020 | All rights reserved.</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
