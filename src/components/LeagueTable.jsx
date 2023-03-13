import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from './tools/Api'

export default function LeagueTable(props) {
    const [Team, setTeam] = useState([])
    const [League, setLeague] = useState([])

    const { id } = useParams()

    useEffect(() => {
        API.get(`team`)
            .then(res => {
                setTeam(res.data.data)
            })
            API.get(`league/${id}`)
            .then(res =>{
              setLeague(res.data.data.table.sort(function (a, b) {
                return a.number - b.number;
            }))
            })
    },[])

    const TeamName = (id) =>{
        let tem = Team.find(i => i._id == id)
        return tem.name
    }

    const more = () => {
        const table = document.querySelector('.team');
        table.scrollTo({ top: 170, behavior: 'smooth' })
    }
    return (
        <div className='table'>
            <div className="head">
                <h4>Laliga</h4>
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
                        {League.map((team, i) =>{
                            return(
                                <tr>
                                <td>{team.number}</td>
                                <td id='name'>{TeamName(team.id)}</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
                                <td>59</td>
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
            </div>
        </div>
    )
}
