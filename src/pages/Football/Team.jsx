import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../components/tools/Api'
import NewsSm from '../../components/NewsSm'
import LeagueTable from '../../components/LeagueTable'

export default function Team() {
  const [News, setNews] = useState([])
  const [Team, setTeam] = useState([])
  const [League, setLeague] = useState([])
  const [ImgTeam, setImgTeam] = useState([])


  const { id } = useParams()

  useEffect(() => {
    API.get(`news/team/${id}`)
      .then(res => {
        setNews(res.data.data)
      })
    API.get(`team/${id}`)
      .then(res => {
        setTeam(res.data.data)
        API.get(`league/${res.data.data.league}`)
          .then(res => {
            setLeague(res.data.data)
          })
      })
  }, [id])

  return (
    <>
      <header className='navbarfootball'>
        <nav className='container p-0'>
          <div className='row border-bottom'>
            <div className="col-6  py-0 px-4">
              <h2>{Team.name}</h2>
            </div>
            <div className="col-6 img text-right">
              <img src={League.img} alt="" />
            </div>
          </div>
        </nav>
      </header>
      <div className='container main mt-4'>

        <div className="row main__newsgrid border-0 mt-1">
          <div className="newsgrid g-3-2-4 col-12">
            {News.map((newes, i) => {
              if (i < 4)
                return (
                  <NewsSm key={i} news={newes} />
                )
            })}
            <LeagueTable table={League} />
            {/* <NewsSm />
        <NewsVid />
        <NewsSm />
        <NewsVid /> */}
          </div>

          <div className="newsgrid g-3-3-2-2 col-12">
            {News.map((newes, i) => {
              if (i > 4 && i < 9)
                return (
                  <NewsSm key={i} news={newes} />
                )
            })}
            {/* <NewsSm />
        <NewsVid />
        <NewsSm />
        <NewsVid /> */}
          </div>
          <div className="newsgrid g-3-2-3-2 col-12">
            {News.map((newes, i) => {
              if (i < 4)
                return (
                  <NewsSm key={i} news={newes} />
                )
            })}
            {/* <NewsSm />
        <NewsVid />
        <NewsSm />
        <NewsVid /> */}
          </div>
        </div>
      </div>
    </>
  )
}
