import { Button, Container } from 'react-bootstrap'
import GradIcon from "../../assets/graduate.svg"


export const HeroSection = () => {
  return (
    <div className="bg-dark text-light p-5 pb-lg-0 text-center text-sm-start">
        <Container>
            <div className="d-sm-flex align-items-center justify-content-between">
                <div className="pe-md-5">
                    <h1>
                        Ayo Kuliah <span className="text-warning">Diluar Negeri</span>
                    </h1>
                    <p className="lead my-4 pe-lg-5 me-lg-5">
                        Kami berfokus untuk menyediakan informasi kepada para pelajar Indonesia yang memiliki impian untuk bisa belajar diluar negeri.
                    </p>
                    <Button className="btn btn-primary btn-md fw-semibold" data-bs-toggle="" data-bs-target="">
                        Mulai Cari Tahu
                    </Button>
                </div>
                <img className="img-fluid d-none d-sm-block pe-lg-5" width="37%" src={GradIcon} alt=""/>
            </div>
        </Container>
      </div>
  )
}
