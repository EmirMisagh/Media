import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsChevronCompactRight } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Menu from './Menu';
import API from './tools/Api';
import ResultHeader from './ResultHeader';

export default function Header() {
    const [Token, setToken] = useState('');
    const [Admin, setAdmin] = useState('');
    const [Menuon, setMenuon] = useState(0);
    const [Result, setResult] = useState([]);
    const [Teams, setTeams] = useState([]);
    const [Leagues, setLeagues] = useState([]);
    const [Menuclass, setMenuclass] = useState({
        menu: 'menuoff',
        saye: 'sayeoff'
    });
    const [SlidResult, setSlidResult] = useState(3);

    useEffect(() => {

        API.get('team')
            .then(response => {
                setTeams(response.data.data)
                console.log(response.data.data)
            })
        API.get('league')
            .then(response => {
                setLeagues(response.data.data)
                console.log(response.data.data)
            })
        setToken(localStorage.getItem('token'));
        setAdmin(localStorage.getItem('admin'));

        API.get('match/result/')
            .then(response => {
                setResult(response.data.data)
            })
        if (window.innerWidth < 890) {
            setSlidResult(1)
        } else if (window.innerWidth < 1263) {
            setSlidResult(2)
        } else {
            setSlidResult(3)
        }
    }, [])

    const MenuHandle = () => {
        if (Menuon == 0) {
            setMenuclass({
                menu: 'menuon',
                saye: 'sayeon'
            })
            setMenuon(1)
        } else {
            setMenuclass({
                menu: 'menuoff',
                saye: 'sayeoff'
            })
            setMenuon(0)
        }
    }

    window.onscroll = function () {
        const navbary = document.getElementById('Navbary');
        if (window.pageYOffset > 70) {
            navbary.style.position = 'fixed';
            navbary.style.left = '2%';
            navbary.style.top = '10px';
        } else {
            navbary.style.position = 'relative';
            navbary.style.left = '0%';
            navbary.style.top = '0px';
        }
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 890) {
            setSlidResult(1)
        } else if (window.innerWidth < 1263) {
            setSlidResult(2)
        } else {
            setSlidResult(3)
        }
    })

    return (
        <>
            <nav className="navic">
                <div className="row navic__top">
                    <div className="col-6 col-md-3 c1 ">
                        <NavLink to='/'>
                            <h3>
                                VC
                            </h3>
                        </NavLink>
                        <small>VictoryCity</small>
                    </div>
                    <div className="col-6 c2">
                        <input type="text" name="" id="" placeholder='Search' />
                        <button><i><AiOutlineSearch /></i></button>
                    </div>
                    <div className="col-0 col-md-3 c3">
                        {Token == undefined ? (
                            <>
                                <NavLink to='/login'>
                                    <button className='btn'>Log in</button>
                                </NavLink>
                                <NavLink to='/signin'>
                                    <button className='btn'>sign</button>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                {Admin == undefined ? (
                                    <NavLink to='/people'>
                                        <button className='btn'>Dashbourd</button>
                                    </NavLink>

                                ) : (
                                    <a href='http://localhost:3000/'>
                                        <button className='btn'>Dashbourd</button>
                                    </a>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className="navic__bottom row">
                    <div className="Navbary row" id='Navbary'>
                        <div className="col-11 col-md-6 c1">
                            <li className='Football' id="nav-foul">
                                <NavLink id='index' to='/football/New Results' >Soccer</NavLink>
                                <div className="Footballdiv">
                                    <ul>
                                        <li>Results</li>
                                        {Leagues.map((league, i) => {
                                            if (league.navbar == true)
                                                return (
                                                    <li>
                                                        <NavLink to='/football/league/63e929b97625b40834846b81'>
                                                            {league.name} <br />
                                                            <small>
                                                                Standings |
                                                                Schedule
                                                            </small>
                                                        </NavLink>
                                                    </li>

                                                )
                                        })}
                                        {/* <li>
                                            <NavLink to='/football/league/63e929b97625b40834846b81'>
                                                Champions League <br />
                                                <small>
                                                    Standings |
                                                    Schedule
                                                </small>
                                            </NavLink>
                                        </li>
                                        <li>
                                            Europa League <br />
                                            <small>
                                                Standings |
                                                Schedule
                                            </small>
                                        </li>
                                        <li>
                                            <NavLink to='/football/league/6409db479b3c1e20acc86d6d'>
                                                Transfers Market <br />
                                                <small>
                                                    Standings |
                                                    Schedule
                                                </small>
                                            </NavLink>
                                        </li> */}
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
                                                            <NavLink to={`/football/league/${league._id}`} >
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
                                                            <NavLink to={`/football/team/${team._id}`} >
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
                                                    if (i < 4)
                                                        return (
                                                            <NavLink to={`/football/league/${league._id}`} >
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
                                                            <NavLink to={`/football/team/${team._id}`} >
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
                            <li className='NBA' id="nav-foul">
                                <NavLink to='/basketball' >NBA</NavLink>
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
                            <li className='Basketball' id="nav-foul">
                                <NavLink to='#'>Basketball</NavLink>
                                <div className="Basketballdiv">
                                    <ul>
                                        <li><h5>Laliga</h5></li>
                                        <li><small>Laliga</small></li>
                                        <li><small>Laliga</small></li>
                                    </ul>
                                    <ul>
                                        <li><h5>Laliga</h5></li>
                                        <li><small>Laliga</small></li>
                                        <li><small>Laliga</small></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='Valliball' id="nav-foul">
                                <NavLink to='#'>Tennis</NavLink>
                            </li>
                            <li className='Betting' id="nav-foul">
                                <NavLink to='#'>Judo</NavLink>
                            </li>
                            <li className='Betting' id="nav-foul">
                                <NavLink to='#'>Motor</NavLink>
                            </li>
                            <li className='Betting' id="nav-foul">
                                <NavLink to='#'>Betting</NavLink>
                            </li>
                            {Token == undefined ? (
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
                                    <NavLink to='/login'>Dasbourd</NavLink>
                                </li>
                            )}
                        </div>
                        <div className="col-1 col-md-6 c3">
                            <li>
                                <a href='http://instgram/'>
                                    <i>
                                        <AiFillInstagram />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href='http://google.com'>
                                    <i>
                                        <BsFacebook />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <NavLink to=''>
                                    <i>
                                        <AiFillTwitterCircle />
                                    </i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=''>
                                    <i>
                                        <AiFillLinkedin />
                                    </i>
                                </NavLink>
                            </li>
                            <li id="btn-menu">
                                <button onClick={() => MenuHandle()}><AiOutlineMenu /></button>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="row navic__Results">
                    <div className="Result">
                        <Swiper
                            className='Result__swiper'
                            modules={[Navigation, Scrollbar, A11y, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={SlidResult}
                            navigation={{ clickable: true }}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className='m-0'>
                                    <div className='logo'>
                                        Laliga
                                    </div>
                                    {Result.map((match, i) => {
                                        if (i < 3)
                                            return (
                                                <div key={i}>
                                                    <ResultHeader game={match} />
                                                </div>

                                            )
                                    })}

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='m-0'>
                                    <div className='logo'>
                                        UCL
                                    </div>
                                    {Result.map((match, i) => {
                                        if (i > 2 && i < 6)
                                            return (
                                                <div key={i}>
                                                    <ResultHeader game={match} />
                                                </div>
                                            )
                                    })}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className='logo'>
                                        Premier
                                    </div>
                                    {Result.map((match, i) => {
                                        if (i > 5 && i < 9)
                                            return (
                                                <div key={i}>
                                                    <ResultHeader game={match} />
                                                </div>
                                            )
                                    })}

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className='logo'>
                                        NBA
                                    </div>
                                    {Result.map((match, i) => {
                                        if (i > 2 && i < 6)
                                            return (
                                                <div key={i}>
                                                    <ResultHeader game={match} />
                                                </div>
                                            )
                                    })}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <Menu class={Menuclass} handle={MenuHandle} />
            </nav>
        </>
    )
}
