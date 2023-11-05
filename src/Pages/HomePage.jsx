import { Navmenu } from "../Components/Navbar/Navbar"
import { HeroSection } from "../Components/LandingPage/HeroSection"
import { DestinationSection } from "../Components/LandingPage/DestinationSection"
import { NewsletterSection } from "../Components/LandingPage/NewsletterSection"
import { FooterSection } from "../Components/LandingPage/FooterSection"
import { ArticlesSection } from "../Components/LandingPage/ArticlesSection"
import { useEffect, useState } from "react"
import { FaqSection } from "../Components/LandingPage/FaqSection"
import axios from "axios"

export const HomePage = () => {
  const [destData, setDestData] = useState(null);
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const loadDestination = async () => {
      try {
          const res = await axios.get(`http://localhost:3000/api/country/all`);
          setDestData(res.data.data);
      } catch (err) {
          console.log(err)
      }
    }

    const loadArticle = async () => {
      try {
          const res = await axios.get(`http://localhost:3000/api/article/all`);
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

      <FaqSection/>

      <FooterSection/>
    </>
  )
}
