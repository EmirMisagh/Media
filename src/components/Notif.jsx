import React, { useEffect, useState } from 'react'
import API from './tools/Api'

export default function Notif() {
    const [Team, setTeam] = useState([])
    const [Fteam, setFteam] = useState({})
    const [Lteam, setLteam] = useState({})
    const [Style, setStyle] = useState('')
    const [Game, setGame] = useState({ _id: "" })
    const [Time, setTime] = useState(0)

    useEffect(() => {
        const i = document.body.offsetHeight;
        API.get('team')
        .then(response => {
            setTeam(response.data.data)
        })
    }, [])

    useEffect(() => {
        if (Game._id == "") {
            API.get('match/live')
                .then(response => {
                    setGame(response.data.data)
                    setTime(response.data.time)
                })
        }
        if (Game._id != "") {
            API.get('match/live')
                .then(response => {
                    setGame(response.data.data)
                    setTime(response.data.time)

                })
                API.get(`team/${Game.fristteam}`)
                .then(response =>{
                  setFteam(response.data.data)
                })
              API.get(`team/${Game.lastteam}`)
                .then(response =>{
                  setLteam(response.data.data)
                })
        }


    })

    const time = (e) => {
        if (e >= 45 && e <= 60) {
            return  45
        } else if (e > 60 )
            return 'H2 ' + (e - 15)
        else
            return 'H1 ' + e
    }

    // window.onscroll = () => {
    //     if (window.pageYOffset >= 3315) {
    //         alert('hi')
    //     }
    // }
    return (
        <div className='container-fluid notifmain'>
            {Game._id != "" ? (


                <div className="notif ">
                    <div className="row">
                        <div className="col-4 fteam">
                            <div className="back"></div>
                            <img src={Fteam.img} alt="" />
                        </div>
                        <div className="col-4 live">
                            <button className={`live`}>LIVE</button>
                        </div>
                        <div className="col-4 lteam">
                            <div className="back"></div>
                            <img src={Lteam.img} alt="" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4">
                            {Fteam.name}
                        </div>
                        <div className="col-4">
                             {time(Time)} : 00
                        </div>
                        <div className="col-4">
                        {Lteam.name}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}
