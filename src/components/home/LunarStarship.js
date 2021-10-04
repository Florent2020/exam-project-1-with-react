import React from "react";
import { Col, Container } from "react-bootstrap";
import img from "../../img/starship_moon.jpeg";

function LunarStarship() {
  return (
    <div id="lunar_starship">
      <Col>
        <img src={img} alt="lunar starship" />
      </Col>
      <Container>
        <div className="lunar_text">
          <h6>02/01/2020</h6>
          <h2>Crew dragon nasa selects lunar optimized starship</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <a
            href="https://www.spacex.com/updates/nasa-selects-lunar-optimized-starship/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>LEARN MORE!</button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default LunarStarship;
