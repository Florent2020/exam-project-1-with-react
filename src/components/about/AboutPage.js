import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import image2 from "../../img/elon.jpg";
import image1 from "../../img/em_mobile.jpg";
import AboutList from "./AboutList";

function About() {
  return (
    <main id="main_about">
      <Helmet>
        <title>About | Galaxy SpaceX</title>
        <meta
          name="description"
          content="Visit our microsite to explore the space science around us. Explore launches, rockets, space's events history, and more!"
        />
      </Helmet>
      <Container>
        <Row>
          <div className="about">
            <img src={image1} alt="Elon Musk" />
            <img src={image2} alt="Elon Musk" />
            <div className="about_spaceX">
              <h1>
                About Space<span>X</span>
              </h1>
              <div className="about_text">
                <div className="left_text">
                  <p>Founder:</p>
                  <p>Founded:</p>
                  <p>Employees:</p>
                  <p>Launch sites:</p>
                  <p>Address:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Summary:</p>
                </div>
                <div className="right_text">
                  <AboutList />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default About;
