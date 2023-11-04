import {Col, Container, Image, Nav, Row} from "react-bootstrap"
import React from "react";
import reactSvg from "../../assets/react.svg";

export const FooterSection = () => {
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
                            <Nav.Item><Nav.Link href="#">Tentang Kami</Nav.Link></Nav.Item>
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
