import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import video from "../../img/CrewDragon.mp4";

function VirtualSimulator() {
  return (
    <div id="virtual_simulator">
      <div className="virtual_simulator">
        <Container>
          <Row>
            <Col xs={12} md={6} className="order-md-1">
              <div>
                <video autoPlay loop muted className="video">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </Col>
            <Col xs={12} md={6} className="order-md-2">
              <div className="text_simulator">
                <h2>Crew dragon virtual simulator</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <a
                  href="https://iss-sim.spacex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Try it!</button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default VirtualSimulator;
