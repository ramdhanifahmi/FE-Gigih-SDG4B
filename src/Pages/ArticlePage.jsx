/* eslint-disable no-unused-vars */
import { Card, Container, Stack } from "react-bootstrap"
import { Navmenu } from "../Components/Navbar/Navbar"
import { useEffect, useState } from "react";
import axios from "axios";
import { Paginations } from "../Components/Paginations/Paginations";

export const ArticlePage = () => {
    const [articlesData, setArticlesData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    useEffect(() => {
        const loadArticle = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/v1/article/all`);
            setArticlesData(res.data.data);
        } catch (err) {
            console.log(err)
        }
        }

        loadArticle();
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = articlesData.slice(firstPostIndex, lastPostIndex);
  return (
    <>
        <Navmenu/>

        <div className="p-5" style={{background: "#F8E8EE"}}>
            <Container className="pt-4">
                <h1 
                    className="text-center fw-bold pb-1"
                    style={{
                        fontSize: "3.5rem",
                        background: "linear-gradient(to right, #FFF700 0%, #00D5FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Temukan Artikel <span style={{fontStyle:"italic"}}>Insightful</span> agar Kamu <br/>Semakin <span style={{fontStyle:"italic"}}>Thoughtful</span>
                </h1>
                <p className="text-center text-secondary">
                    Gali potensi yang selama ini kamu yakini bersama mentor yang ahli dibidangnya, <br/>kamu bakal dipandu sampai bener bener paham.
                </p>
            </Container>
        </div>

        <div className="px-5 pb-5 bg-light">
            <Container>
                <h1 className="fw-bold text-center pt-5">Artikel Terbaru</h1>
                <Stack direction="horizontal" gap={5} className="text-white px-5 my-5 d-flex flex-wrap align-items-center">
                    {
                        currentPosts?.map((data) => (
                            <Card key={data.id} style={{ width: '19rem', boxShadow: '8px 8px 5px 2px rgba(0,0,0,0.44)', cursor: 'pointer' }}>
                                <Card.Img variant="top" src={data.imgThumbnail} style={{height: '220px'}} />
                                <Card.Body className="pb-5">
                                    <Card.Title 
                                        className="mt-2 mb-3 fw-bold"
                                        style={{
                                            fontSize: '16px'
                                        }}
                                    >
                                        {data.title}
                                    </Card.Title>
                                    <Card.Text 
                                        className='px-1'
                                        style={{
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '5',
                                            lineClamp: '5',
                                            WebkitBoxOrient: 'vertical',
                                            fontSize: '13px',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        {data.contents}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Stack>

                <div className="d-flex justify-content-center">
                    <Paginations 
                        totalData={articlesData.length} 
                        dataPerPage={postsPerPage} 
                        setPage={setCurrentPage} 
                        currentPage={currentPage} 
                    />
                </div>
            </Container>
        </div>
    </>
  )
}
