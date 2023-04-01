import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import API from './tools/Api';

export default function Menu(props) {
  const [Teams, setTeams] = useState([]);
  const [Leagues, setLeagues] = useState([]);
  const [Token, setToken] = useState('');
  const [Admin, setAdmin] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setAdmin(localStorage.getItem('admin'));
    API.get('team')
      .then(response => {
        setTeams(response.data.data)
      })
    API.get('league')
      .then(response => {
        setLeagues(response.data.data)
      })
  }, [])

  return (
    <>
      <div className={`${props.class.menu}`} id='menu'>
        <div className="menuon__logo">
          <NavLink to='/'>
            <h3>
              VC
            </h3>
          </NavLink>
          <small>VictoryCity</small>
        </div>
        <div className="menuon__navbar">
          <ul>
            <li>
              <div className="nav">

                <strong>
                  Soccer
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
              <div className="Footballdiv">
                <ul>
                  <li>Results</li>
                  {Leagues.map((league, i) => {
                    return (
                      league.navbar === true && (

                        <li key={i}>
                          <NavLink to={`/football/league/${league._id}`}>
                            {league.name} <br />
                            <small>
                              Standings |
                              Schedule
                            </small>
                          </NavLink>
                        </li>
                      )

                    )
                  })}

                </ul>
                <ul>
                  <li>
                    Euro Best Player <br />
                    <small>
                      Schedule
                    </small>
                  </li>
                  <li>
                    Ranking <br />
                    <small>
                      League Ranking |
                      Team Ranking |
                      Clausura Standings |
                      Clausura Schedule
                    </small>
                  </li>
                  <li className='b-0'>
                    European Soccer <br />
                    <small>
                      {Leagues.map((league, i) => {
                        if (i < 7)
                          return (
                            <NavLink to={`/football/league/${league._id}`} key={i} >
                              <small>
                                {" " + league.name} |
                              </small>
                            </NavLink>

                          )
                      })}

                    </small>

                  </li>
                </ul>
                <ul>
                  <li>
                    Euro Team Soccer <br />
                    <small>
                      {Teams.map((team, i) => {
                        if (i < 15)
                          return (
                            <NavLink to={`/football/team/${team._id}`} key={i} >
                              <small>
                                {" " + team.name} |
                              </small>
                            </NavLink>

                          )
                      })}

                    </small>

                  </li>
                  <li className='b-0'>
                    Other League Soccer <br />
                    <small>
                      {Leagues.map((league, i) => {
                        if (i < 4)
                          return (
                            <NavLink to={`/football/league/${league._id}`} key={i} >
                              <small>
                                {" " + league.name} |
                              </small>
                            </NavLink>

                          )
                      })}

                    </small>

                  </li>
                </ul>
                <ul>
                  <li>
                    France Football <br />
                    <small>
                      Formula 1
                      MotoGP
                      Moto2
                      Moto3
                    </small>
                  </li>
                  <li>
                    Other Team Soccer <br />
                    <small>
                      {Teams.map((team, i) => {
                        if (i < 15)
                          return (
                            <NavLink to={`/football/team/${team._id}`} key={i} >
                              <small>
                                {" " + team.name} |
                              </small>
                            </NavLink>

                          )
                      })}

                    </small>

                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav">

                <strong>
                  Soccer
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
            </li>
            <li>
              <div className="nav">

                <strong>
                  Soccer
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
            </li>
            <li>
              <div className="nav">

                <strong>
                  Soccer
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
            </li>
            <li>
              <div className="nav">

                <strong>
                  Soccer
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
            </li>
            <li>
              <div className="nav">

                <strong>
                  Soccer
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
            </li>
          </ul>
          <ul>
            {Token === undefined ? (
              <>
                <li className='Login' id="btn-login">
                  <NavLink to='/login'>Login</NavLink>
                </li>
                <li className='Login' id="btn-login">
                  <NavLink to='#'>Signin</NavLink>
                </li>
              </>
            ) : (
              <li className='Login' id="btn-login">
                <NavLink to='/people'>Dasbourd</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={`${props.class.saye}`} onClick={props.handle}>

      </div>
    </>
  )
}
