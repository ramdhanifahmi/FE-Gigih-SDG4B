/* eslint-disable react/prop-types */
import { Button, Container, Stack } from "react-bootstrap"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Link, useNavigate} from "react-router-dom";


export const DestinationSection = ({destData}) => {
  const navigate = useNavigate();

  const navigateToScholar = (country) => {
    navigate(`/scholar?country=${country}`);
  };

  return (
    <div className="p-5">
        <Container>
          <h1 className="text-center mt-4 fw-bold">Masih belum yakin mau kuliah dimana ?</h1>
          <p className="text-center fw-semibold lead">Berikut ini pencarian paling populer untuk kamu</p>

          <Stack direction="horizontal" gap={4} className="text-white my-5 d-none d-md-flex flex-wrap justify-content-center align-items-center">
            {destData?.map((data) => (
                <div
                    key={data.id}
                    onClick={() => navigateToScholar(data.name)}
                    className="p-2 d-flex justify-content-center align-items-center photo-card fw-bold fs-5 rounded-3"
                    style={{
                      width: '305px',
                      height: '190px',
                      cursor: 'pointer',
                      backgroundImage: `url(${data.image})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      textShadow: '2px 2px black',
                    }}
                >
                  {data.name}
                </div>
            ))}
          </Stack>

          <Swiper
            className="d-md-none"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {
              destData?.map((data) => (
                <SwiperSlide key={data.id}>
                  <div
                    className="p-2 d-flex justify-content-center align-items-center text-white w-100 photo-card mb-5 mt-2 fw-bold"
                    style={{
                      minHeight:'220px',
                      cursor:'pointer',
                      backgroundImage:`url(${data.image})`,
                      backgroundRepeat:'no-repeat',
                      backgroundPosition:'center',
                      backgroundSize:'cover',
                      boxShadow: 'boxShadow:  10px 12px 5px 2px rgba(0,0,0,0.44)'
                    }}
                  >
                    {data.country}
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>


          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={() => navigate('/scholar')} variant="outline-primary" size="sm" className="fw-semibold fs-6 w-50 mt-2">Lihat Lainnya</Button>
          </div>

        </Container>
      </div>
  )
}
