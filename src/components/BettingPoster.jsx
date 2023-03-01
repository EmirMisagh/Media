import React, { useEffect, useState } from 'react';
import API from './tools/Api'
import {LodingPoster} from './Loding'

export default function BettingPoster(props) {
  const [Fteam, setFteam] = useState({})
  const [Lteam, setLteam] = useState({})
  const [League, setLeague] = useState([])
  const [Loding, setLoding] = useState(0)
  useEffect(() =>{
    API.get(`league/${props.game.league}`)
    .then(response =>{
      setLeague(response.data.data)
    })
    API.get(`team/${props.game.fristteam}`)
      .then(response =>{
        setFteam(response.data.data)
      })
    API.get(`team/${props.game.lastteam}`)
      .then(response =>{
        setLteam(response.data.data)
      })
      setTimeout(() => {
      
        setLoding(1)
      }, 2000);
  },[])

  return (
    <>
    {Loding == 0 ? (
      <LodingPoster />
    ) : (
    <div className="bettingposter">
      <div className="img">
        <img src={props.game.poster} alt="" />
      </div>  
      <div className="title">
        <div className="left">
            <img src={Fteam.img} alt="" />
            <p>{Fteam.name}</p>
        </div>
        <div className="time">
            <small>{League.name}</small>
            <b>12:30</b>
            <small>12 dec</small>
        </div>
        <div className="right">
            <img src={Lteam.img} alt="" />
            <p>{Lteam.name}</p>
        </div>
      </div>
    </div>
    )}
    </>
  )
}
