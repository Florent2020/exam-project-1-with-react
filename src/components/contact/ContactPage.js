import { Helmet } from "react-helmet";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../forms/ContactForm";

function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact | Galaxy SpaceX</title>
        <meta
          name="description"
          content="Do you need help? Feel free and Contact Us at contact form of Galaxy SpaceX"
        />
      </Helmet>
      <div id="contact">
        <Container>
          <Row>
            <Col xs={12} md={5} className="contact_text">
              <Heading content="Contact Us" />
              <p>If you have any questions, please feel free to contact us!</p>
            </Col>
            <Col xs={12} md={7} className="contact_form">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default Contact;
