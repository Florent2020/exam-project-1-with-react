import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../img/gallery/1.jpg";
import image2 from "../../img/gallery/3.jpg";
import image3 from "../../img/gallery/8.jpg";

function FeatureStories() {
  return (
    <section id="feature_stories">
      <Container>
        <div className="feature_row">
          <h2>Feature Stories</h2>
          <Row className="feature_stories">
            <Col xs={12} md={4}>
              <img src={image1} alt="feature gallery" />
              <div className="feature_text">
                <h6>5 August 2020, in SpaceX</h6>
                <span className="red_line"></span>
                <h3>
                  SpaceX’s prototype Mars rocket has flown for the first time
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="https://www.newscientist.com/article/2250944-spacexs-prototype-mars-rocket-has-flown-for-the-first-time/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>LEARN MORE!</button>
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src={image2} alt="feature gallery" />
              <div className="feature_text">
                <h6>27 May 2020, in Space</h6>
                <span className="red_line"></span>
                <h3>SpaceX to make history launching on a private rocket</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="https://www.newscientist.com/article/2244541-spacex-to-make-history-launching-nasa-astronauts-on-a-private-rocket/#:~:text=The%20launch%20from%20Cape%20Canaveral,to%20launch%20humans%20into%20space."
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>LEARN MORE!</button>
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src={image3} alt="feature gallery" />
              <div className="feature_text">
                <h6>23 July 2020, in SpaceX</h6>
                <span className="red_line"></span>
                <h3>
                  Elon Musk's SpaceX or a superpower: Who'll win the new space
                  race?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="https://www.newscientist.com/article/mg24232300-500-elon-musks-spacex-or-a-superpower-wholl-win-the-new-space-race/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>LEARN MORE!</button>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default FeatureStories;
