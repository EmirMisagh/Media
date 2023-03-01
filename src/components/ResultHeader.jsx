import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from './tools/Api'

export default function ResultHeader(props) {
  const [Fteam, setFteam] = useState({})
  const [Lteam, setLteam] = useState({})
  const [League, setLeague] = useState([])
  useEffect(() => {
    API.get(`league`)
      .then(response => {
        setLeague(response.data.data)
      })
    API.get(`team/${props.game.fristteam}`)
      .then(response => {
        setFteam(response.data.data)
      })
    API.get(`team/${props.game.lastteam}`)
      .then(response => {
        setLteam(response.data.data)
      })

  }, [])
  return (
    <li className='resul'>
      <NavLink to={`/football/team/${Fteam._id}`}>
        <small>

          <img src={Fteam.img} alt="" />
          <b className='pt-5'>{Fteam.nickname}</b>
          <i>{props.game.fristresult}</i>
        </small>
      </NavLink>
      <NavLink to={`/football/team/${Lteam._id}`}>
        <small>
          <img src={Lteam.img} alt="" />
          <b className='pt-5'>{Lteam.nickname}</b>
          <i>{props.game.lastresult}</i>
        </small>
      </NavLink>
    </li>
  )
}
