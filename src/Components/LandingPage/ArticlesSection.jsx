/* eslint-disable react/prop-types */
import { Button, Card, Container, Stack } from 'react-bootstrap'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const ArticlesSection = ({articleData}) => {
  return (
    <div className="p-5 article-section">
        <Container>
          <h1 className="text-center mt-4 fw-bold">Informasi, Saran dan Wawasan</h1>
          <p className="text-center fw-semibold lead">Temukan banyak hal menarik dari artikel kami</p>

          <Stack direction="horizontal" gap={4} className="text-white my-5 d-none d-md-flex flex-wrap justify-content-center align-items-center text-center">
            {
              articleData?.slice(0,3).map((data) => (
                <Card key={data.id} style={{ width: '19rem', boxShadow: '8px 8px 5px 2px rgba(0,0,0,0.44)' }}>
                  <Card.Img variant="top" src={data.imgThumbnail} style={{height: '220px'}} />
                  <Card.Body className="text-center">
                    <Card.Title 
                      className="mt-2 mb-3 fw-bold"
                      style={{
                        fontSize: '16px'
                      }}
                    >
                      {data.title}
                    </Card.Title>
                    <Card.Text 
                      className='px-2'
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
                    <Button href="/articles" variant="warning" className="my-2 fw-bold text-white" style={{fontSize: '13px'}}>Lebih Banyak</Button>
                  </Card.Body>
                </Card>
              ))
            }
          </Stack>



          {/* screen size xs to md below */}
          {/* screen size xs to md below */}
          <Swiper
            className="d-md-none"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={6}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {
              articleData?.map((data) => (
                <SwiperSlide key={data.id} className='px-2'>
                  <Card style={{ minWidth: '8rem', boxShadow: '8px 8px 5px 2px rgba(0,0,0,0.44)' }} className="mb-5 mt-1">
                    <Card.Img variant="top" src={data.imgThumbnail} style={{minHeight:'140px', maxHeight:'160px'}} />
                    <Card.Body className="text-center">
                      <Card.Title className="mt-1 mb-2 fw-bold" style={{ fontSize: '15px' }}>{data.title}</Card.Title>
                      <Card.Text 
                        className='px-2'
                        style={{
                            fontSize: '12px',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            lineClamp: '3',
                            WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {data.contents}
                      </Card.Text>
                      <Button variant="warning" className="my-1 fw-bold text-white" style={{minWidth: '10%', fontSize: '12px'}}>Lebih Banyak</Button>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>

          <div className="d-flex justify-content-center align-items-center">
            <Button href="/articles" variant="outline-success" size="sm" className="fw-semibold fs-6 mt-2 mt-md-0" style={{maxWidth: '55%', minWidth: '50%'}}>Artikel Lainnya</Button>
          </div>

        </Container>
      </div>
  )
}
