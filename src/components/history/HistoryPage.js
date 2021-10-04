import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import PageList from "./PageList";

function History() {
  return (
    <main id="history">
      <Helmet>
        <title>History | Galaxy SpaceX</title>
        <meta
          name="description"
          content="Making history. SpaceX is the first private company to send astronauts to the International Space Station"
        />
      </Helmet>
      <Container>
        <div id="main_history">
          <h1>
            All Historical Space<span>X</span> Events
          </h1>
          <div className="spaceX">
            <div className="title">
              <p className="id">No:</p>
              <p className="title_">Title:</p>
              <p className="date">Event date:</p>
              <p className="flight_number">Flight no:</p>
              <p className="detail">Details:</p>
              <p className="btn btn-link">Links:</p>
            </div>
            <PageList />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default History;
