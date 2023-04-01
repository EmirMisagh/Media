import React, { useEffect, useState } from 'react'
import NewsLg from '../components/NewsLg'
import NewsSm from '../components/NewsSm'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NewsVid from '../components/NewsVid';
import { NavLink } from 'react-router-dom';
import Matches from '../components/Matches';
import API from '../components/tools/Api'
import BettingPoster from '../components/BettingPoster';
import Stiker from '../components/Stiker';
import LiveVideo from '../components/LiveVideo';


export default function Index() {
  const [News, setNews] = useState([])
  const [Tools, setTools] = useState([])
  const [MatchesApi, setMatchesApi] = useState([])
  const [Game, setGame] = useState([])
  const [SlidResult, setSlidResult] = useState(6);

  useEffect(() => {
    API.get(`news`)
      .then(responce => {
        setNews(responce.data.data)
      })

    API.get(`tools`)
      .then(responce => {
        setTools(responce.data.data[0])
      })
    API.get('match/live')
      .then(response => {
        setGame(response.data.data)
      })
    API.get(`match`)
      .then(responce => {
        setMatchesApi(responce.data.data)
      })
    if (window.innerWidth < 890) {
      setSlidResult(3)
    } else if (window.innerWidth < 1263) {
      setSlidResult(4)
    } else {
      setSlidResult(6)
    }

  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 890) {
      setSlidResult(3)
    } else if (window.innerWidth < 1263) {
      setSlidResult(4)
    } else {
      setSlidResult(6)
    }
  })





  return (
    <>
      <div className='container mt-5 main'>
        <div className="row main__head">
          <div className="col-12 col-xl-4 order-2 order-xl-1">
            <h5>Weeks Match</h5>
            <div className="mainmatch mt-4" style={{ backgroundImage: `url(${Tools.bg_match})` }}>
              {MatchesApi.map((match, i) => {
                if (i < 5)
                  return (
                    <NavLink key={i} to={`/football/match/${match._id}`}>
                      <Matches game={match} />
                    </NavLink>
                  )
              })}



              <h6 className='mt-2'>
                <NavLink to='/football/matches'>
                  <button>More</button>
                </NavLink>
              </h6>
            </div>
          </div>
          <div className="col-12 col-xl-8 order-1 order-xl-2">
            <h5>Weeks News</h5>
            <Swiper
              className='swiper mt-4'
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
            >
              {News.map((newes, i) => {
                if (i < 6)
                  if (i === 3)
                    return (
                      <SwiperSlide key={i}>
                        <div>in 3</div>
                      </SwiperSlide>
                    )
                  else
                    return (
                      <SwiperSlide key={i}>
                        <NavLink to={`/news/${newes._id}`}>
                          <NewsLg newsprops={newes} />
                        </NavLink>
                      </SwiperSlide>
                    )
              })}

            </Swiper>
            <div className="gridnews p-0 mt-3">
              {News.map((newes, i) => {
                if (i < 1)
                  return (
                    <NewsSm key={i} news={newes} />
                  )
              })}
              {/* <NewsSm /> */}
              <NewsVid />
              <NewsVid />

            </div>
          </div>
        </div>
        <div className="row mt-5 main__titr">
          <h5>
            Suggested News
          </h5>
        </div>
        <div className="row  main__swiperStiker mt-1">
          <Swiper
            className='swiper p-3'
            style={{ backgroundImage: `url(http://localhost:3001/image/Tools/bg_match/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg)` }}
            modules={[Pagination, Scrollbar, A11y, Navigation]}
            spaceBetween={20}
            navigation={{ clickable: true }}
            slidesPerView={SlidResult}
          >
            {News.map((newes, i) => {
              if (i < 11)
                return (
                  <SwiperSlide key={i}>
                    <Stiker news={newes} />
                  </SwiperSlide>
                )
            })}
          </Swiper>
        </div>
        <div className="row mt-5 main__titr">
          <div className="col-8">
            <h5>
              Suggested News
            </h5>
          </div>
          <div className="col-4 more">
            <h5 className='more '>
              more
            </h5>
          </div>
        </div>
        <div className="row main__newsgrid mt-1">
          <div className="newsgrid g-3-2-3-2 col-12">
            {News.map((newes, i) => {
              if (i < 4)
                return (
                  <NavLink to={`/news/${newes._id}`} key={i}>

                    <NewsSm news={newes} />
                  </NavLink>
                )
            })}
          </div>
          <div className="newsgrid g-5-5 col-12">
            {News.map((newes, i) => {
              if (i < 2)
                return (
                  <div key={i}>
                    <NavLink to={`/news/${newes._id}`} key={i}>
                      <NewsLg newsprops={newes} />
                    </NavLink>
                  </div>
                )
            })}
          </div>
          <div className="newsgrid g-3-3-2-2 col-12">
            {News.map((newes, i) => {
              if (i > 4 && i < 9)
                return (
                  <NavLink to={`/news/${newes._id}`} key={i}>

                    <NewsSm news={newes} />
                  </NavLink>
                )
            })}
          </div>
          <div className="newsgrid g-3-2-3-2 col-12">
            {News.map((newes, i) => {
              if (i < 4)
                return (
                  <NavLink to={`/news/${newes._id}`} key={i}>

                    <NewsSm news={newes} />
                  </NavLink>
                )
            })}
          </div>
        </div>
        <div className="row mt-5 main__titr">
          <div className="col-8">
            <h5>
              Suggested Games
            </h5>
          </div>
          <div className="col-4 more">

            <h5 className='more'>
              more
            </h5>
          </div>
        </div>
        <div className="row main__bettingposter mt-1">
          <div className="newsgrid g-3-4-3 col-12">
            {MatchesApi.map((match, i) => {
              if (i < 3)
                return (
                  <NavLink key={i} to={`/football/match/${match._id}`}>
                    <BettingPoster game={match} />
                  </NavLink>
                )
            })}


          </div>
          <div className="newsgrid g-5-5 col-12">
            {MatchesApi.map((match, i) => {
              if (i < 5 && i > 2)
                return (
                  <NavLink key={i} to={`/football/match/${match._id}`}>
                    <BettingPoster game={match} />
                  </NavLink>
                )
            })}
          </div>
          <div className="newsgrid g-3-3-4 col-12">
            {MatchesApi.map((match, i) => {
              if (i < 8 && i > 4)
                return (
                  <NavLink key={i} to={`/football/match/${match._id}`}>
                    <BettingPoster game={match} />
                  </NavLink>
                )
            })}
          </div>
          <div className="newsgrid g-5-5 col-12">
            {MatchesApi.map((match, i) => {
              if (i < 10 && i > 7)
                return (
                  <NavLink key={i} to={`/football/match/${match._id}`}>
                    <BettingPoster game={match} />
                  </NavLink>
                )
            })}
          </div>
        </div>
        <div className="row mt-5 main__titr">
          <div className="col-8">
            <h5>
              VS Lives
            </h5>
          </div>
          <div className="col-4 more">
            <h5 className='more'>
              more
            </h5>
          </div>
        </div>
        <div className="row mt-1 main__containervideo">
          {Game.map((item, i) => {
            return (
              (i + 1) % 2 === 0 ? (
                <LiveVideo key={i} />
              ) : (
                <div className="row mainvideo" key={i}>
                  <div className="col-12 col-md-8 order-2 order-md-1 title">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic quos id architecto temporibus, tempora quaerat blanditiis incidunt impedit ea odit saepe, ad optio nesciunt assumenda! Aperiam placeat sit est?</p>
                  </div>
                  <div className="col-12 col-md-4 order-1 order-md-2 video">
                    <video controls width="100%" height="100%">
                      <source src="myVideo.webm" type="video/webm" />
                      <source src="myVideo.mp4" type="video/mp4" />
                      <p>
                        Your browser doesn't support HTML video. Here is a
                        <a href="myVideo.mp4">link to the video</a> instead.
                      </p>
                    </video>
                  </div>
                </div>
              ))
          })}
          <div className="row mainvideo">
            <div className="col-12 col-md-8 order-2 order-md-1 title">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic quos id architecto temporibus, tempora quaerat blanditiis incidunt impedit ea odit saepe, ad optio nesciunt assumenda! Aperiam placeat sit est?</p>
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2 video">
              <video controls width="100%" height="100%">
                <source src="myVideo.webm" type="video/webm" />
                <source src="myVideo.mp4" type="video/mp4" />
                <p>
                  Your browser doesn't support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
            </div>
          </div>
          <div className="row mainvideo">
            <div className="col-12 col-md-4 order-1 order-md-2 video">
              <video controls width="100%" height="100%">
                <source src="myVideo.webm" type="video/webm" />
                <source src="myVideo.mp4" type="video/mp4" />
                <p>
                  Your browser doesn't support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
            </div>
            <div className="col-12 col-md-8 order-1 order-md-2 title">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic quos id architecto temporibus, tempora quaerat blanditiis incidunt impedit ea odit saepe, ad optio nesciunt assumenda! Aperiam placeat sit est?</p>

            </div>
          </div>
          <div className="row mainvideo">
            <div className="col-12 col-md-8 order-2 order-md-1  title">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic quos id architecto temporibus, tempora quaerat blanditiis incidunt impedit ea odit saepe, ad optio nesciunt assumenda! Aperiam placeat sit est?</p>

            </div>
            <div className="col-12 col-md-4 order-1 order-md-2  video">
              <video controls width="100%" height="100%">
                <source src="myVideo.webm" type="video/webm" />
                <source src="myVideo.mp4" type="video/mp4" />
                <p>
                  Your browser doesn't support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
            </div>
          </div>
        </div>
        <div className="row mt-5 px-2">
          <div className="col-12 col-md-3 p-1 mt-1">
            <img src="http://localhost:3001/image/Tools/bg_match/WallpaperDog-1001569.jpg" width='100%' height='180px' style={{ borderRadius: '15px' }} alt="" />
          </div>
          <div className="col-12 col-md-3 p-1 mt-1">
            <img src="http://localhost:3001/image/Tools/bg_match/WallpaperDog-10712516.jpg" width='100%' height='180px' style={{ borderRadius: '15px' }} alt="" />
          </div>
          <div className="col-12 col-md-3 p-1 mt-1">
            <img src="http://localhost:3001/image/Tools/bg_match/WallpaperDog-5481006.jpg" width='100%' height='180px' style={{ borderRadius: '15px' }} alt="" />
          </div>
          <div className="col-12 col-md-3 p-1 mt-1">
            <img src="http://localhost:3001/image/Tools/bg_match/WallpaperDog-20572846.jpg" width='100%' height='180px' style={{ borderRadius: '15px' }} alt="" />
          </div>

        </div>

      </div>
    </>
  )
}
