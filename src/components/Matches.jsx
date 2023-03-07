import React, { useEffect, useState } from 'react';
import API from './tools/Api'
import {LodingCom} from './Loding';

export default function Matches(props) {
  const [Fteam, setFteam] = useState({})
  const [Lteam, setLteam] = useState({})
  const [League, setLeague] = useState([])
  const [Loding, setLoding] = useState(0)

  const date = new Date(props.game.date)
  
  const monthNames = ["January", "Feb", "Mar", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateName = date.getDate() + ' ' + monthNames[date.getMonth()];

  useEffect(() =>{
    API.get(`league`)
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

  const leaguehandle = (id) => {
    let leag = League.find(leg => {return leg._id == id})
    console.log(leag)
    return leag.name;
  }

  return (
    <>
   
    <div className="match text-center">
    {Loding == 0 ? (
      <LodingCom />
    ) : (
      <>
      <div className="left">
        <img src={Fteam.img} alt="" />
        <p>{Fteam.name}</p>
      </div>
      <div className="date">
        <small>Champions League</small>
        <b>{props.game.time}</b>
        <small>{dateName}</small>
      </div>
      <div className="right">
        <img src={Lteam.img} alt="" />
        <p>{Lteam.name}</p>
        </div>
      </>
    )}
    </div>
    </>
  )
}
