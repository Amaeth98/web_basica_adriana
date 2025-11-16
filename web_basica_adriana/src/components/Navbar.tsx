import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaHouse, FaEnvelope, FaScrewdriverWrench } from "react-icons/fa6";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-custom">
      <Container className="navbar-inner">
        <Navbar.Brand href="#inicio" className="navbar-logo">
          Fotografía Adriana
        </Navbar.Brand>

        <Nav className="ms-auto nav-items">
          <Nav.Link href="#inicio">
            <span className="nav-icon-text">
              <FaHouse className="nav-icon" />
              Inicio
            </span>
          </Nav.Link>

          <Nav.Link href="#servicios">
            <span className="nav-icon-text">
              <FaScrewdriverWrench className="nav-icon" />
              Servicios
            </span>
          </Nav.Link>

          <Nav.Link href="#contacto">
            <span className="nav-icon-text">
              <FaEnvelope className="nav-icon" />
              Contacto
            </span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
