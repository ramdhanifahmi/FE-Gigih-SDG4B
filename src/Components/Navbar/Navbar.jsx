import { Button, Container, Nav, Navbar } from "react-bootstrap";
import reactSvg from "../../assets/react.svg"
export const Navmenu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light fw-semibold">
        <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={reactSvg}
                width="30"
                height="30"
                className="d-inline-block align-top fw-bold"
                />{' '}
                Study Abroad
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home" className="me-md-5">Home</Nav.Link>
                    <Nav.Link href="#link" className="me-md-5">FAQ</Nav.Link>
                    <Nav.Link href="#link" className="me-md-5">Articles</Nav.Link>
                    <Nav.Link href="#link" className="me-md-5">About</Nav.Link>
                    {/* <Nav.Link href="#link" className="d-md-none me-md-5">Contact Us</Nav.Link> */}
                </Nav>
                <Button variant="outline-warning fw-bold" className="rounded-pill">Contact Us</Button>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}