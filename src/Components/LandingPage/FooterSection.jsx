import {Col, Container, Image, Nav, Row} from "react-bootstrap"
import reactSvg from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

export const FooterSection = () => {
    const navigate = useNavigate();
  return (
      <div className="p-2 bg-dark text-white position-relative" style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
      }}>
        <Container>
            <Container className="py-4">
                <Row>
                    <Col md={6}>
                        <Image src={reactSvg} alt="React logo" />
                        <p>Platform online yang menyediakan informasi untuk mencari beasiswa di luar negeri.</p>
                    </Col>
                    <Col md={6} className="text-end">
                        <Nav className="justify-content-end">
                            <Nav.Item><Nav.Link onClick={() => navigate('/about')}>Tentang Kami</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#">Kontak Kami</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#">Syarat dan Ketentuan</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#">Kebijakan Privasi</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <p className="lead text-center">Copyright &copy; 2023 Generasi GIGIH SDG4B</p>
        </Container>
      </div>
  )
}
