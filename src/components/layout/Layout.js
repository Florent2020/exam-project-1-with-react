import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/HomePage";
import Launches from "../launches/LaunchesPage";
import History from "../history/HistoryPage";
import About from "../about/AboutPage";
import Contact from "../contact/ContactPage";
import Logo from "../../img/logo.png";
import Image from "react-bootstrap/Image";
import Footer from "../layout/Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <ScrollToTop />
          <Navbar bg="transparent" expand="lg" variant="dark">
            <Container>
              <NavLink to="/" exact>
                <Image src={Logo} className="logo" alt="logo" />
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink to="/" exact className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/launches" className="nav-link">
                    Launches
                  </NavLink>
                  <NavLink to="/history" className="nav-link">
                    History
                  </NavLink>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/launches">
              <Launches />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
