import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import API from './tools/Api';

export default function Menu(props) {
  const [Teams, setTeams] = useState([]);
  const [Leagues, setLeagues] = useState([]);
  const [Token, setToken] = useState('');
  const [Admin, setAdmin] = useState('');
  const [Dark, setDark] = useState(true);

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

  const DarkHandle = () => {
    const bod = document.querySelector('body');
    if (Dark === true) {
      console.log(Dark)
      bod.id = 'dark';
      setDark(false)
    } else{
      console.log(Dark)
      bod.id = '';
      setDark(true)
    }
  }

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
                  NBA
                </strong>
                <strong>
                  <BsChevronDoubleRight />
                </strong>
              </div>
              <div className="NBAdiv">
                <ul>
                  <li>FIFA World Cup</li>
                  <li>
                    NFL <br />
                    <small>
                      Standings |
                      Schedule
                    </small>
                  </li>
                  <li>
                    NBA <br />
                    <small>
                      Standings |
                      Schedule
                    </small>
                  </li>
                  <li>
                    MLS <br />
                    <small>
                      Standings |
                      Schedule
                    </small>
                  </li>
                </ul>
                <ul>
                  <li>
                    Concacaf Champions League <br />
                    <small>
                      Schedule
                    </small>
                  </li>
                  <li>
                    Mexican League <br />
                    <small>
                      Apertura Standings |
                      Apertura Schedule |
                      Clausura Standings |
                      Clausura Schedule
                    </small>
                  </li>
                  <li className='b-0'>
                    European Soccer <br />
                    <small>
                      LaLiga |
                      Copa del Rey |
                      Premier League |
                      Serie A |
                      Bundesliga |
                      Ligue1 |
                      Champions League |
                      Europa League |
                    </small>
                  </li>
                </ul>
                <ul>
                  <li>
                    Latin American Soccer <br />
                    <small>
                      Chilean Primera División |
                      Argentina Liga Profesional |
                      Colombian Liga BetPlay |
                      Peruvian Primera División |
                    </small>

                  </li>
                  <li>
                    Libertadores <br />
                    <small>
                      Standings |
                      Schedule

                    </small>
                  </li>
                  <li>
                    Gold Cup
                  </li>
                </ul>
                <ul>
                  <li>
                    Motor <br />
                    <small>
                      Formula 1
                      MotoGP
                      Moto2
                      Moto3
                    </small>
                  </li>
                  <li>
                    Tennis <br />
                    <small>
                      Australian Open
                      US Open
                      Wimbledon
                      Roland Garros
                    </small>
                  </li>
                  <li>
                    Cycling <br />
                    <small>
                      Tour de France
                      Giro Italia
                      Vuelta a España
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
              <div className="Basketballdiv">
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
                              <small key={i}>
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
                              <small key={i}>
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
                        if (i > 4)
                          return (
                            <NavLink to={`/football/league/${league._id}`} key={i} >
                              <small key={i}>
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
                              <small key={i}>
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
          </ul>
          <ul>
            <input className="container_toggle" onChange={DarkHandle} type="checkbox" id="switch" name="mode" />
            <label htmlFor="switch">Toggle</label>
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
