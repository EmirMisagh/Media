import React, { useEffect, useState } from 'react';
import API from './tools/Api'
import {LodingPoster} from './Loding'

export default function LiveVideo(props) {
  const [Fteam, setFteam] = useState({})
  const [Lteam, setLteam] = useState({})
  const [League, setLeague] = useState([])
  const [Loding, setLoding] = useState(0)
  const [Match, setMatch] = useState({})

  useEffect(() =>{
    setMatch(props.game)
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
  const time = (e) => {
    if (e >= 45 && e <= 60) {
        return 45
    } else if (e > 60 && e < 105)
        return 'H2 ' + (e - 15)
    else if (e >= 105)
        return 'H2 +90'
    else
        return 'H1 ' + e
}
  return (
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
      <h1>{Fteam.name} vs {Lteam.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus, tempora quaerat blanditiis incidunt impedit ea odit saepe, ad optio nesciunt assumenda! Aperiam placeat sit est?</p>
      <small>
      {Fteam.name} {props.game.fristresult} - {props.game.lastresult} {Lteam.name}
        </small><br />
      <small>
      {time(props.game.__v)} : 00
        </small>
    </div>
  </div>
  )
}
