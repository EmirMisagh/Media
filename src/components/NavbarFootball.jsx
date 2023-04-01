import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import API from './tools/Api'

export default function NavbarFootball() {
    const [League, setLeague] = useState([])
    const [Leagues, setLeagues] = useState([])

    const { id } = useParams()

    useEffect(() => {

        API.get(`league/${id}`)
            .then(res => {
                setLeague(res.data.data)
            })
        API.get(`league`)
            .then(res => {
                setLeagues(res.data.data)
            })
    }, [id])
    useEffect(() => {

        API.get(`league/${id}`)
            .then(res => {
                setLeague(res.data.data)
            })
    })
    return (
        <>
            <header className='navbarfootball'>
                <nav className='container p-0'>
                    <div className='row border-bottom'>
                        <div className="col-6  py-0 px-4">
                            <h2>{League.name}</h2>
                        </div>
                        <div className="col-6 img text-right">
                            <div className="imgg">
                                <img src={League.img} alt="" />

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className=" navbarfootball">
                <div className="container">


                    <div className="row ">
                        <ul className='navbarfootball__navbar px-4 col-10'>
                            {Leagues.map((league, i) => {
                                if (i < 3)
                                    return (
                                        <NavLink key={i} to={`/football/league/${league._id}`}>
                                            <li  >{league.name}</li>

                                        </NavLink>

                                    )
                            })}
                            {Leagues.map((league, i) => {
                                if (i > 2 && i < 5)
                                    return (
                                        <NavLink key={i} to={`/football/league/${league._id}`}>
                                            <li className='mediumnone' >{league.name}</li>

                                        </NavLink>

                                    )
                            })}
                            {Leagues.map((league, i) => {
                                if (i > 4 && i < 7)
                                    return (
                                        <NavLink key={i} to={`/football/league/${league._id}`}>
                                            <li className='largnone' >{league.name}</li>

                                        </NavLink>

                                    )
                            })}

                        </ul>
                        <ul className='col-2 p-0 pe-3'>
                            <select className="mt-1 me-2" name="" id="">
                                {Leagues.map((league, i) => {
                                    if (i < 7)
                                        return (
                                            <option value={league._id}>
                                                <NavLink key={i} to={`/football/league/${league._id}`}>
                                                    {league.name}
                                                </NavLink>
                                            </option>
                                        )
                                })}




                            </select>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
