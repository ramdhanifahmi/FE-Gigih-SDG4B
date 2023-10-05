import { Navmenu } from "../Components/Navbar/Navbar"
import { HeroSection } from "../Components/LandingPageSection/HeroSection"
import { DestinationSection } from "../Components/LandingPageSection/DestinationSection"
import { NewsletterSection } from "../Components/LandingPageSection/NewsletterSection"
import { FooterSection } from "../Components/LandingPageSection/FooterSection"
import { ArticlesSection } from "../Components/LandingPageSection/ArticlesSection"
import { Container } from "react-bootstrap"

export const HomePage = () => {
  return (
    <>
      <Navmenu/>

      <HeroSection/>

      <DestinationSection/>

      <ArticlesSection/>

      <NewsletterSection/>

      <div className="p-5 d-md-none">
        <Container>
          
        </Container>
      </div>

      <FooterSection/>
    </>
  )
}
