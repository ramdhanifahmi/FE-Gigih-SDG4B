/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { Navmenu } from "../Components/Navbar/Navbar";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export const ArticleDetail = () => {
    const {id} = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
      const loadArticle = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/article/${id}`);
            setArticle(res.data.data);
        } catch (err) {
            console.log(err)
        }
      }

      loadArticle();
    }, [])

  return (
    <>
      <Navmenu />

      <div className="articles-data bg-light">
        <h1 className="text-center fw-bold">{article.title}</h1>
        <div className="d-flex justify-content-center m-5">
          <Image src={article.image}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }}/>
      </div>
    </>
  )
}
