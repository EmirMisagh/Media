import React, { useEffect, useState } from 'react';
import API from './tools/Api'
import { LodingCom } from './Loding';

export default function MatchResult(props) {
    const [Fteam, setFteam] = useState({})
    const [Lteam, setLteam] = useState({})
    const [League, setLeague] = useState([])
    const [Loding, setLoding] = useState(0)

    const date = new Date(props.game.date)

    const monthNames = ["January", "Feb", "Mar", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dateName = date.getDate() + ' ' + monthNames[date.getMonth()];

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
        setTimeout(() => {

            setLoding(1)
        }, 2000);

    }, [props.game.fristteam])

    const leaguehandle = (id) => {
        let leag = League.find(leg => { return leg._id == id })
        console.log(leag)
        return leag.name;
    }

    return (
        <>

            <div className="matchresult text-center ">
                {Loding == 0 ? (
                    <LodingCom />
                ) : (
                    <>
                        <div className="row top">
                            <div className="left col-4">
                                <img src={Fteam.img} alt="" />
                            </div>
                            {props.game.fristresult == "" ? (
                                <div className="date col-4">
                                    <small>Champions League</small>
                                    <b>{props.game.time}</b>
                                </div>
                            ) : (
                                <div className="date col-4 result">
                                    <b>{props.game.fristresult}</b>
                                    <small>vs</small>
                                    <b>{props.game.lastresult}</b>
                                </div>
                            )}

                            <div className="right col-4">
                                <img src={Lteam.img} alt="" />
                            </div>

                        </div>
                        <div className="row bottom">
                            <div className="left col-4">
                                <p>{Fteam.name}</p>
                            </div>
                            <div className="date col-4">
                                <small>{dateName}</small>
                            </div>
                            <div className="right col-4">
                                <p>{Lteam.name}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
