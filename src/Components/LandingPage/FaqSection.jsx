import { Accordion, Container } from "react-bootstrap"

export const FaqSection = () => {

  return (
    <div className="p-5">
        <Container id="faq">
            <h1 className="text-center fw-bold">Frequently Asked Questions</h1>
            <p className="text-center fw-semibold lead">Berikut pertanyaan yang sering ditanyakan</p>
            <Accordion defaultActiveKey={['0']} className="mt-5" alwaysOpen>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Apakah Broaders menyediakan program bimbingan belajar atau konsultasi ?</Accordion.Header>
                <Accordion.Body>
                    Tidak, kami tidak menyediakan program apapun untuk saat ini, untuk sekarang kami berfokus menyajikan dan menyediakan informasi untuk para pelajar Indonesia yang berminat belajar ke luar negeri sehingga mereka bisa menjadi lebih percaya diri dalam menghadapi masa depan yang menanti.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Bagaimana cara agar mendapatkan kabar terbaru dari Broaders ?</Accordion.Header>
                <Accordion.Body>
                    Kamu bisa berlangganan newsletter gratis dengan menuliskan emailmu pada section Sign Up For Our Newsletter.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Apa informasi yang tersedia relevan dan dapat dipercaya ?</Accordion.Header>
                <Accordion.Body>
                    Kami selalu berusaha menyajikan inforamasi yang aktual dan relevan tapi kami menyarankan kepada para pengguna untuk senantiasa memeriksa kembali informasi yang didapatkan dari internet sehingga terhindar dari hoaks.
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </div>
  )
}
