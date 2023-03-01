import React from 'react'
import { useEffect, useState } from 'react'
import API from './tools/Api'

export default function LeagueTable() {
    const [Team, setTeam] = useState([])

    useEffect(() => {

        API.get(`team`)
            .then(res => {
                setTeam(res.data.data)
            })
    }, [])

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
                      
                        {Team.map((team, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td id='name'>{team.name}</td>
                                    <td>59</td>
                                    <td>59</td>
                                    <td>59</td>
                                    <td>59</td>
                                    <td>59</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>2</td>
                            <td id='name'></td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                        </tr>
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
