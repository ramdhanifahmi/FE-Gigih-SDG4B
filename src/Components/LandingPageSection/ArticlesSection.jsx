import { Button, Card, Container, Stack } from 'react-bootstrap'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import articleData from '../../dummyData/articleData.json';

export const ArticlesSection = () => {
  return (
    <div className="p-5 article-section">
        <Container>
          <h1 className="text-center mt-4 fw-bold">Informasi, Saran dan Wawasan</h1>
          <p className="text-center fw-semibold lead">Temukan banyak hal menarik dari artikel kami</p>

          <Stack direction="horizontal" gap={4} className="text-white my-5 d-none d-md-flex flex-wrap justify-content-center align-items-center text-center">
            {
              articleData.map((data) => (
                <Card key={data.id} style={{ width: '21rem' }}>
                  <Card.Img variant="top" src={data.imgThumbnail} />
                  <Card.Body className="text-center">
                    <Card.Title 
                      className="my-4 fw-bold"
                      style={{
                        fontSize: '18px'
                      }}
                    >
                      {data.title}
                    </Card.Title>
                    <Card.Text 
                      style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: '6',
                        lineClamp: '6',
                        WebkitBoxOrient: 'vertical',
                        fontSize: '15px'
                      }}
                    >
                      {data.contents}
                    </Card.Text>
                    <Button variant="warning" className="my-3 fs-6 fw-bold text-white">Lebih Banyak</Button>
                  </Card.Body>
                </Card>
              ))
            }
          </Stack>



          {/* screen size xs to md */}
          {/* screen size xs to md */}
          <Swiper
            className="d-md-none"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {
              articleData.map((data) => (
                <SwiperSlide key={data.id}>
                  <Card style={{ minWidth: '8rem' }} className="mb-5 mt-1">
                    <Card.Img variant="top" src={data.imgThumbnail} />
                    <Card.Body className="text-center">
                      <Card.Title className="my-2 fw-bold fs-6">{data.title}</Card.Title>
                      <Card.Text 
                        style={{
                            fontSize: '13px',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            lineClamp: '3',
                            WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {data.contents}
                      </Card.Text>
                      <Button variant="warning" className="my-1" style={{minWidth: '10%', fontSize: '14px'}}>Lebih Banyak</Button>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>

          <div className="d-flex justify-content-center align-items-center">
            <Button variant="outline-success" size="sm" className="fw-semibold fs-6 mt-2 mt-md-0" style={{maxWidth: '55%', minWidth: '50%'}}>Artikel Lainnya</Button>
          </div>

        </Container>
      </div>
  )
}
