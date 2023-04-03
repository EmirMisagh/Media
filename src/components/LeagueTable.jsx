import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import API from './tools/Api'

export default function LeagueTable(props) {
    const [Team, setTeam] = useState([])
    const [League, setLeague] = useState([])
    const [NameLeague, setNameLeague] = useState({})

    const { id } = useParams()

    useEffect(() => {
        API.get(`team`)
            .then(res => {
                setTeam(res.data.data)
            })
        API.get(`league/${id}`)
            .then(res => {
                setLeague(res.data.data.table.sort(function (a, b) {
                    return a.number - b.number;
                }))
                setNameLeague(res.data.data)
            })
    }, [id])

    const TeamName = (id) => {
        let tem = Team.find(i => i._id === id)
        return tem.name
    }

    const more = () => {
        const table = document.querySelector('.team');
        let scrol = table.scrollTop;
        scrol += 170;
        const top = document.getElementById('top');
        top.style.display = 'block';
        table.scrollTo({ top: scrol, behavior: 'smooth' })
    }
    return (
        <div className='table'>
            <div className="head">
                <h4>
                <NavLink to={`/football/league/${NameLeague._id}`}>
                    {NameLeague.name}
                    </NavLink>
                    </h4>
            </div>
            <div className="team">
                <table className='border-1 '>
                    <thead>
                        <tr>
                            <th colspan="2"></th>
                            <th>Pts.</th>
                            <th>PJ</th>
                            <th>PG</th>
                            <th>PE</th>
                            <th>PP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {League.map((team, i) => {
                            return (
                                <tr>
                                    <td>
                                        {team.number < 4 ? (
                                            <img src="http://localhost:3001/image/Tools/logo/champions.png" alt="" />
                                        ) : (
                                            <img src="http://localhost:3001/image/Tools/logo/euro.png" alt="" />
                                        )}
                                        {team.number}
                                    </td>
                                    <td id='name'>
                                        <NavLink to={`/football/team/${team.id}`}>
                                            {TeamName(team.id)}
                                        </NavLink>
                                    </td>
                                    <td>{team.point}</td>
                                    <td>{team.game}</td>
                                    <td>{team.win}</td>
                                    <td>{team.deve}</td>
                                    <td>{team.lose}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
            <div className="more">
                <button onClick={more}>

                    More
                </button>
                <button style={{ display: 'none' }} id='top' onClick={(e) => { const table = document.querySelector('.team'); table.scrollTo({ top: 0, behavior: 'smooth' }); e.target.style.display = 'none'; }}>

                    top
                </button>
            </div>
        </div>
    )
}
