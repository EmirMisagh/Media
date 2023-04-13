import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../components/tools/Api'
import NewsSm from '../../components/NewsSm'
import LeagueTable from '../../components/LeagueTable'
import { NavLink } from 'react-router-dom';
import Matches from '../../components/Matches'

export default function Team() {
  const [News, setNews] = useState([])
  const [Team, setTeam] = useState([])
  const [League, setLeague] = useState([])
  const [ImgTeam, setImgTeam] = useState([])
  const [MatchesApi, setMatchesApi] = useState([])

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
    API.get(`match`)
      .then(responce => {
        setMatchesApi(responce.data.data)
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
              <div className="imgg">
                <img src={League.img} alt="" />

              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='container main mt-4'>
        <div className="row main__newsgrid border-0 mt-1">
          <div className="newsgrid g-3-3-3 col-12">
            <div className=''>
              {News.map((newes, i) => {
                if (i < 1)
                  return (
                    <>
                      <NavLink to={`/news/${newes._id}`} key={i}>

                        <NewsSm news={newes} clas={'newsSmTak'} />
                      </NavLink>
                    </>
                  )
              })}
            </div>
            <div className='newsscreen'>
              {News.map((newes, i) => {
                if (i > 0 && i < 3)
                  return (
                    <>

                      <NavLink to={`/news/${newes._id}`} key={i}>

                        <NewsSm news={newes} clas={'newsSmSC'} />
                      </NavLink>
                    </>

                  )
              })}
            </div>
            <div className='newsscreen'>
              {MatchesApi.map((match, i) => {
                if (i < 3)
                  return (
                    <NavLink key={i} to={`/football/match/${match._id}`}>
                      <Matches game={match} />
                    </NavLink>
                  )
              })}
              <div className='moreBtnMatch'>
                <NavLink to={`/football/matches/?league=${id}`}>
                  <button>More</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="newsgrid g-3-3-2-2 col-12">
            {News.map((newes, i) => {
              if (i < 4)
                return (
                  <NewsSm key={i} news={newes} />
                )
            })}
          </div>
          <div className="newsgrid g-3-7 col-12">
            <div className='newsscreen'>
              {News.map((newes, i) => {
                if (i < 5)
                  return (
                    <>

                      <NavLink to={`/news/${newes._id}`} key={i}>

                        <NewsSm news={newes} clas={'newsSmSC'} />
                      </NavLink>
                    </>

                  )
              })}
            </div>
            <div>
              <LeagueTable table={League} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
