import { Button, Container, Form, InputGroup } from "react-bootstrap"
import { Navmenu } from "../Components/Navbar/Navbar"
// import PersonIcon from "../assets/showcase.svg"
import GradIcon from "../assets/graduate.svg"

export const HomePage = () => {
  return (
    <>
      <Navmenu/>

      <div className="bg-dark text-light p-5 pb-lg-0 text-center text-sm-start">
        <Container>
            <div className="d-sm-flex align-items-center justify-content-between">
                <div className="pe-md-5">
                    <h1>
                        Ayo Belajar <span className="text-warning">Diluar Negeri</span>
                    </h1>
                    <p className="lead my-4 pe-md-5 me-md-5">
                        Kami berfokus untuk menyediakan informasi kepada para pelajar Indonesia yang memiliki impian untuk bisa belajar diluar negeri.
                    </p>
                    <buttton className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
                        Mulai Cari Tahu
                    </buttton>
                </div>
                <img className="img-fluid d-none d-sm-block pe-md-5" width="37%" src={GradIcon} alt=""/>
            </div>
        </Container>
      </div>

      <div className="bg-primary text-light p-5">
        <Container>
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0 w-100">Sign Up For Our Newsletter</h3>
            <InputGroup className="w-100 w-md-50 input-group">
              <Form.Control
                placeholder="your.email@mail.com"
                aria-label="Your Email"
                aria-describedby="basic-addon2"
                className="fs-5"
              />
              <Button variant="dark" id="button-addon2" className="fs-5">
                Submit
              </Button>
            </InputGroup>
          </div>
        </Container>
      </div>

      <div className="p-4 bg-dark text-white text-center position-relative">
        <Container>
            <p className="lead">Copyright &copy; 2023 Generasi GIGIH SDG4B</p>
            <a href="#" className="position-absolute bottom-0 end-0 p-4">
                <i className="bi bi-arrow-up-circle h1"></i>
            </a>
        </Container>
    </div>
    </>
  )
}
