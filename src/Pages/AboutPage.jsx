import { Card, Image } from "react-bootstrap"
import { Navmenu } from "../Components/Navbar/Navbar"
import { FooterSection } from "../Components/LandingPage/FooterSection"
import phoneIcon from "../assets/phone-flip.svg"
import locationIcon from "../assets/location.svg"
import emailIcon from "../assets/email.svg"

export const AboutPage = () => {
  return (
    <>
        <Navmenu />
        <div className="p-5">
          <div>
            <h1 className="text-center fw-bold my-5">Tentang Kami</h1>
            <p className="about-text lead fw-semibold article-text-justify">
                Kami membantu pelajar internasional untuk mewujudkan impian mereka studi di luar negeri. Mulai dari riset awal hingga aplikasi pendaftaran universitas luar negeri, Broaders Indonesia membantu pelajar untuk menemukan jurusan kuliah dan universitas yang sempurna lewat saran, panduan dan alat pencari jurusan yang muktahir.
            </p>
          </div>

          <div id="contact" className="p-3">
            <h1 className="text-center fw-bold my-5">Kontak Kami</h1>
            <div className="d-md-flex justify-content-center align-items-center gap-5">
              <Card className="mb-5">
                <Card.Body className="mx-auto fw-semibold">
                  <Image src={locationIcon} width={30} alt="location" />
                  <span className="ms-2">This is some text within a card body.</span>
                </Card.Body>
              </Card>
              <Card className="mb-5">
                <Card.Body className="mx-auto fw-semibold">
                  <Image src={emailIcon} width={30} alt="email" />
                  <span className="ms-2">contact@broaders.com</span>
                </Card.Body>
              </Card>
              <Card className="mb-5">
                <Card.Body className="mx-auto fw-semibold">
                  <Image src={phoneIcon} width={30} alt="phone" />
                  <span className="ms-2">+62 83399003344</span>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        
        <FooterSection/>
    </>
  )
}
