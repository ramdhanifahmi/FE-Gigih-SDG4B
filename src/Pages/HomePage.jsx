import { Navmenu } from "../Components/Navbar/Navbar"
import { HeroSection } from "../Components/LandingPage/HeroSection"
import { DestinationSection } from "../Components/LandingPage/DestinationSection"
import { NewsletterSection } from "../Components/LandingPage/NewsletterSection"
import { FooterSection } from "../Components/LandingPage/FooterSection"
import { ArticlesSection } from "../Components/LandingPage/ArticlesSection"
import { Accordion, Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"

export const HomePage = () => {
  const [destData, setDestData] = useState(null);
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const loadDestination = async () => {
      try {
          const res = await axios.get(`http://localhost:3000/api/v1/destination/all`);
          setDestData(res.data.data);
      } catch (err) {
          console.log(err)
      }
    }

    const loadArticle = async () => {
      try {
          const res = await axios.get(`http://localhost:3000/api/v1/article/all`);
          setArticleData(res.data.data);
      } catch (err) {
          console.log(err)
      }
    }

    loadDestination();
    loadArticle();
  }, [])

  return (
    <>
      <Navmenu/>

      <HeroSection/>

      <DestinationSection destData={destData}/>

      <ArticlesSection articleData={articleData}/>

      <NewsletterSection/>

      <div className="p-5">
        <Container id="faq">
          <h1 className="text-center fw-bold">Frequently Asked Questions</h1>
          <p className="text-center fw-semibold lead">Berikut pertanyaan yang sering ditanyakan</p>
          <Accordion defaultActiveKey="0" className="mt-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #4</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>

      <FooterSection/>
    </>
  )
}
