import { Button, Container, Form, InputGroup } from "react-bootstrap"

export const NewsletterSection = () => {
  return (
    <div className="bg-primary text-light p-5">
        <Container>
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0 w-100 fs-3 text-center text-lg-start">Sign Up For Our Newsletter</h3>
            <InputGroup className="w-100 w-md-50 input-group">
              <Form.Control
                placeholder="your.email@mail.com"
                aria-label="Your Email"
                aria-describedby="basic-addon2"
                className="fs-6"
              />
              <Button variant="warning" id="button-addon2" className="fs-6">
                Submit
              </Button>
            </InputGroup>
          </div>
        </Container>
      </div>
  )
}
