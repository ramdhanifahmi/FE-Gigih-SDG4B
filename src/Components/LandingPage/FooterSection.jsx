import {Col, Container, Image, Nav, Row, Stack} from "react-bootstrap"
import reactSvg from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

export const FooterSection = () => {
    const navigate = useNavigate();
  return (
      <div className="pt-5 bg-dark text-white">
            <Container className="">
                <Row>
                    <Col xs={12} md={6} className="d-none d-md-flex align-items-center justify-content-center ">
                        <Stack direction="horizontal" gap={3}>
                            <Image src={reactSvg} alt="React logo" className="" />
                            <p className="my-auto">Menyediakan informasi untuk mencari beasiswa di luar negeri.</p>
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <Nav className="justify-content-center">
                            <Nav.Item><Nav.Link onClick={() => navigate('/about')}>Tentang Kami</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#">Syarat dan Ketentuan</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#">Kebijakan Privasi</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <p className="text-center mt-4">Copyright &copy; 2023 Generasi GIGIH SDG4B</p>
            </Container>
    </div>
  )
}
