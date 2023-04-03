import React from 'react'
import { NavLink } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import BettingPoster from '../../components/BettingPoster';
import API from '../../components/tools/Api'



export default function Matches() {
  const [MatchesApi, setMatchesApi] = useState([])

  useEffect(() => {
    API.get(`match`)
      .then(responce => {
        setMatchesApi(responce.data.data)
        console.log(responce.data.data)
      })
  }, [])
  return (
    <div className="container-fluid">
      <div className="container mainmatches">
        <div className="container px-md-5">
          <div className="row p-0">
            <Swiper
              className='swiper mt-3'
              modules={[Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
            >
              {MatchesApi.map((match, i) => {
                if (i < 11)
                  return (
                    <SwiperSlide key={i} className='slide'>
                      <NavLink to={`/news/${match._id}`}>
                        <BettingPoster game={match} />
                      </NavLink>
                    </SwiperSlide>
                  )
              })}

            </Swiper>
          </div>
        </div>
        <div className="row main-all">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div className="button-trand">
              <input type="text" id='searchmusic' placeholder='How Track?' /><br />
              <button className='btn btn-outline-light ms-2'>Trand</button>
              <button className='btn btn-outline-light ms-2'>Top</button>
              <button className='btn btn-outline-light ms-2'>Recommended</button>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 mood-trand">

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 p-0">
            <div className='main-music'>
              <h5 className='ps-3' id='titrmain'>Recommended music</h5><hr />
              <div className="grid-all" id='grid-al'>

              </div>
              <div className="grid-all" id='grid-all'>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 p-0">
            <div className="time-music">
              <div>
                <button className='btn btn-outline-primary ms-2'>This Week</button>
                <button className='btn btn-outline-primary ms-2'>This Month</button>
                <button className='btn btn-outline-primary ms-2'>Today</button>
              </div>
              <div className="main-time">
                <div className='tomore'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
