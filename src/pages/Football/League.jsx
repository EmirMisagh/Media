import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../components/tools/Api'
import NewsSm from '../../components/NewsSm'
import LeagueTable from '../../components/LeagueTable'

export default function League() {
  const [News, setNews] = useState([])
  const [League, setLeague] = useState([])

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
        <div className="newsgrid g-3-2-4 col-12">
          {News.map((newes, i) => {
            return (
              i < 2 ? (
                <NewsSm key={i} news={newes} />
              ) : (
                ""
              )
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
  )
}
