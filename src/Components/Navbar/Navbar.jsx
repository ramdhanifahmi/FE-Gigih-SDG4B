import { Button, Container, Nav, Navbar } from "react-bootstrap";
import reactSvg from "../../assets/react.svg"
import { useNavigate } from "react-router-dom";
export const Navmenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="bg-light fw-semibold">
        <Container>
            <Navbar.Brand href="/">
                <img
                  alt=""
                  src={reactSvg}
                  width="30"
                  height="30"
                  className="d-inline-block align-top fw-bold"
                />{' '}
                Broaders
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link onClick={() => navigate('/')} className="me-md-5">Home</Nav.Link>
                    <Nav.Link href="/scholar" className="me-md-5">List Scholars</Nav.Link>
                    <Nav.Link href="#faq" className="me-md-5">FAQ</Nav.Link>
                    <Nav.Link onClick={() => navigate('/articles')} className="me-md-5">Articles</Nav.Link>
                </Nav>
                <Button variant="outline-warning fw-bold" className="rounded-pill">Contact Us</Button>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
