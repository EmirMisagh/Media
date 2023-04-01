import React, { useEffect, useState } from 'react'
import API from './tools/Api'
import { NavLink, useParams } from 'react-router-dom'

export default function Notif() {
    const [Team, setTeam] = useState([])
    const [Game, setGame] = useState([])

    const  id  = useParams()

    // useEffect(() => {
    //     API.get('team')
    //         .then(response => {
    //             setTeam(response.data.data)
    //         })
    //     if (Game === []) {
    //         API.get('match/live')
    //             .then(response => {
    //                 setGame(response.data.data)
    //                 console.log(response.data.data)
    //             })
    //     }
    //     if (Game !== []) {
    //         API.get('match/live')
    //             .then(response => {
    //                 setGame(response.data.data)
    //             })

    //     }
    //     // if(window.location.href == "http://localhost:5000/football/match/6408448bf8fa4629b03be55f")
    //     // setStyle({
    //     //     display: 'none'
    //     // })
    //     // else
    //     // setStyle({
    //     //     display: 'block'
    //     // })

    // }, [id])

    const teamImg = (id) => {
        let team = Team.find(i => i._id === id)
        return team.img;
    }

    const teamName = (id) => {
        let team = Team.find(i => i._id === id)
        let name = ''
        name = team.name.split('')
        name = name.splice(0, 10)
        name = name.join('');

        // console.log(name)
        return name;
    }

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

    // window.onscroll = () => {
    //     if (window.pageYOffset >= 3315) {
    //         alert('hi')
    //     }
    // }
    return (
        <div className='container-fluid notifmain'>
            {Game !== [] ? (
                Game.map((item, i) => {
                    return (
                        i <= 2 ? (
                            <NavLink key={i} to={`/football/match/${item._id}`}>
                                <div className="notif" key={i} >
                                    <div className="row">
                                        <div className="col-4 fteam">
                                            <div className="back"></div>
                                            <img src={teamImg(item.fristteam)} alt="" />
                                        </div>
                                        <div className="col-4 live">
                                            <button className={`live`}>LIVE</button>
                                        </div>
                                        <div className="col-4 lteam">
                                            <div className="back"></div>
                                            <img src={teamImg(item.lastteam)} alt="" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-4">
                                            {teamName(item.fristteam)}
                                        </div>
                                        <div className="col-4">
                                            {time(item.__v)} : 00
                                        </div>
                                        <div className="col-4">
                                            {teamName(item.lastteam)}
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ) : (
                            ''
                        )
                    )
                })
            ) : (
                ""
            )}
        </div>
    )
}
