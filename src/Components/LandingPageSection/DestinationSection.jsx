import { Button, Container, Stack } from "react-bootstrap"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import destData from '../../dummyData/destinationData.json';

export const DestinationSection = () => {
  return (
    <div className="p-5">
        <Container>
          <h1 className="text-center mt-4 fw-bold">Masih belum yakin mau kuliah dimana ?</h1>
          <p className="text-center fw-semibold lead">Berikut ini pencarian paling populer untuk kamu</p>

          <Stack direction="horizontal" gap={4} className="text-white my-5 d-none d-md-flex flex-wrap justify-content-center align-items-center">
            {
              destData.map((data) => (
                <div
                  key={data.id}
                  className="p-2 d-flex justify-content-center align-items-center photo-card fw-bold fs-5" 
                  style={{
                    width:'305px', 
                    height:'190px', 
                    cursor:'pointer',
                    backgroundImage:`url(${data.imgThumbnail})`,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    textShadow:'2px 2px black'
                  }}
                >
                  {data.country}
                </div>
              ))
            }
          </Stack>

          <Swiper
            className="d-md-none"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div 
                className="p-2 d-flex justify-content-center align-items-center text-white w-100 photo-card mb-5 mt-2 fw-bold" 
                style={{
                  // width:'100%', 
                  height:'220px', 
                  cursor:'pointer',
                  backgroundImage:`url("https://images.ctfassets.net/szez98lehkfm/6R4ZxEAxDgfmDM5JswnqXV/4d0c117045433480ca9f74b2f98532af/MyIC_Inline_48050")`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center',
                  backgroundSize:'cover'
                }}
              >
                Amerika Serikat
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div 
                className="p-2 d-flex justify-content-center align-items-center text-white w-100 photo-card mb-5 mt-2 fw-bold" 
                style={{
                  // width:'100%', 
                  height:'220px', 
                  cursor:'pointer',
                  backgroundImage:`url("https://images.ctfassets.net/szez98lehkfm/6R4ZxEAxDgfmDM5JswnqXV/4d0c117045433480ca9f74b2f98532af/MyIC_Inline_48050")`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center',
                  backgroundSize:'cover'
                }}
              >
                Amerika Serikat
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div 
                className="p-2 d-flex justify-content-center align-items-center text-white w-100 photo-card mb-5 mt-2" 
                style={{
                  // width:'100%', 
                  height:'220px', 
                  cursor:'pointer',
                  backgroundImage:`url("https://images.ctfassets.net/szez98lehkfm/6R4ZxEAxDgfmDM5JswnqXV/4d0c117045433480ca9f74b2f98532af/MyIC_Inline_48050")`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center',
                  backgroundSize:'cover'
                }}
              >
                Amerika Serikat
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div 
                className="p-2 d-flex justify-content-center align-items-center text-white w-100 photo-card mb-5 mt-2" 
                style={{
                  // width:'100%', 
                  height:'220px', 
                  cursor:'pointer',
                  backgroundImage:`url("https://images.ctfassets.net/szez98lehkfm/6R4ZxEAxDgfmDM5JswnqXV/4d0c117045433480ca9f74b2f98532af/MyIC_Inline_48050")`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center',
                  backgroundSize:'cover'
                }}
              >
                Amerika Serikat
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div 
                className="p-2 d-flex justify-content-center align-items-center text-white w-100 photo-card mb-5 mt-2" 
                style={{
                  // width:'100%', 
                  height:'220px', 
                  cursor:'pointer',
                  backgroundImage:`url("https://images.ctfassets.net/szez98lehkfm/6R4ZxEAxDgfmDM5JswnqXV/4d0c117045433480ca9f74b2f98532af/MyIC_Inline_48050")`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center',
                  backgroundSize:'cover'
                }}
              >
                Amerika Serikat
              </div>
            </SwiperSlide>
          </Swiper>
          

          <div className="d-flex justify-content-center align-items-center">
            <Button variant="outline-primary" size="sm" className="fw-semibold fs-6 w-50 mt-2">Lihat Lainnya</Button>
          </div>

        </Container>
      </div>
  )
}
