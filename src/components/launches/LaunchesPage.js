import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import PageList from "./PageList";

function Launches() {
  return (
    <main id="launches">
      <Helmet>
        <title>Launches | Galaxy SpaceX</title>
        <meta
          name="description"
          content="At Galaxy SpaceX microsite, you can find all the Launches of SpaceX"
        />
      </Helmet>
      <Container>
        <div id="main_launches">
          <h1>
            Space<span>X</span> Launches
          </h1>
          <div className="spaceX">
            <div className="title">
              <p className="flight_number">Flight no:</p>
              <p className="rocket_name">Rocket name:</p>
              <p className="launche_date">Launche date:</p>
              <p className="mission_name">Mission name:</p>
              <p className="detail">Details:</p>
              <p className="links">Video links:</p>
            </div>
            <PageList />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Launches;
