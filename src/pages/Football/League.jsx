import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../components/tools/Api'
import NewsSm from '../../components/NewsSm'
import LeagueTable from '../../components/LeagueTable'
import { NavLink } from 'react-router-dom';
import Matches from '../../components/Matches'
import MatchResult from '../../components/MatchResult'

export default function League() {
  const [News, setNews] = useState([])
  const [League, setLeague] = useState([])
  const [MatchesApi, setMatchesApi] = useState([])

  const { id } = useParams()

  useEffect(() => {
    API.get(`news/league/${id}`)
      .then(res => {
        setNews(res.data.data)
      })
    API.get(`league/${id}`)
      .then(res => {
        setLeague(res.data.data)
      })
    API.get(`match/league/${id}`)
      .then(responce => {
        setMatchesApi(responce.data.data)
      })
  }, [id])
  // useEffect(() => {
  //   API.get(`news/league/${id}`)
  //     .then(res => {
  //       setNews(res.data.data)
  //     })
  // }, [id])
  return (
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
                    <MatchResult game={match} />
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
        <div className="newsgrid g-3-3-3 col-12">
        <div className='newsscreen'>
            {MatchesApi.map((match, i) => {
              if (i < 5)
                return (
                  <NavLink key={i} to={`/football/match/${match._id}`}>
                    <MatchResult game={match} />
                  </NavLink>
                )
            })}
            <div className='moreBtnMatch'>
            
            </div>
          </div>
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
              if (i > 0 && i < 5)
                return (
                  <>

                    <NavLink to={`/news/${newes._id}`} key={i}>

                      <NewsSm news={newes} clas={'newsSmSC'} />
                    </NavLink>
                  </>

                )
            })}
          </div>
       
        </div>
        <div className="newsgrid g-3-2-3-2 col-12">
          {News.map((newes, i) => {
            if (i < 13)
              return (
                <NewsSm key={i} news={newes} />
              )
          })}
        </div>
      </div>
    </div>
  )
}
