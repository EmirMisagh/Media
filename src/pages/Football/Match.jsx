import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import API from '../../components/tools/Api'
import BettingPoster from '../../components/BettingPoster';


export default function Match() {

    const { id } = useParams();

    const [People, setPeople] = useState('')
    const [Match, setMatch] = useState('')
    const [Team, setTeam] = useState('first')
    const [FTeam, setFTeam] = useState({})
    const [LTeam, setLTeam] = useState({})
    const [TeamList, setTeamList] = useState([])
    const [Bonos, setBonos] = useState(30)
    const [Iduser, setIduser] = useState('')
    const [DisibelF, setDisibelF] = useState(false)
    const [DisibelL, setDisibelL] = useState(true)
    const [DisibelCheckbox, setDisibelCheckbox] = useState(false)
    const [DisibelStyle, setDisibelStyle] = useState({})
    const user = { Team, Bonos, Iduser }

    const date = new Date(Match.date)

    const monthNames = ["January", "Feb", "Mar", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = date.getDate() + ' ' + monthNames[date.getMonth()];

    useEffect(() => {
        const idUser = localStorage.getItem('token')
        API.get(`match/${id}`)
        .then(response => {
            setMatch(response.data.data)
            API.get(`team/${response.data.data.fristteam}`)
            .then(response => {
                setFTeam(response.data.data)
                console.log(response.data.data)
            })
            API.get(`team/${response.data.data.lastteam}`)
            .then(response => {
                setLTeam(response.data.data)
                console.log(response.data.data)
            })
        })
        API.get(`team`)
            .then(response => {
                setTeamList(response.data.data)
            })
      


        if (idUser != null) {
            API.get(`users/token/${idUser}`)
                .then(response => {
                    setPeople(response.data.data)
                    setIduser(response.data.data._id)

                })
        }
        // if(People == ""){
        //     setDisibelF(true)
        //     setDisibelL(true)
        //     setDisibelCheckbox(true)
        //     setDisibelStyle({
        //         color: "rgba(255, 255, 255, 0.4)",
        //         opacity: '0.6'
        //     })
        // }
        // console.log(People)
      

    }, [FTeam, LTeam])

    const Close = async () => {
        API.patch(`match/betting/update/${id}`, user)
            .then(response => {
                console.log(response.data.data);

            });
    }

    const Checkbox = (e) => {

        const tegat = e.target;

        switch (tegat.id) {
            case 'fteam':
                document.getElementById('lteam').classList.remove('active')
                setDisibelL(true);
                setDisibelF(false);
                setTeam('first');
                setBonos(0)
                break;
            case 'lteam':
                document.getElementById('fteam').classList.remove('active')
                setDisibelL(false);
                setDisibelF(true);
                setTeam('last');
                setBonos(0)
                break;

            default:
                break;
        }
        tegat.classList.add('active')
    }

    const teamImg = (id) => {
        let team = TeamList.find(i => i._id == id)
        console.log(team)
        return team.img;
    }

    const teamName = (id) => {
        let team = TeamList.find(i => i._id == id)
        let name = ''
        name = team.name.split('')
        name = name.splice(0, 10)
        name = name.join('');

        // console.log(name)
        return name;
    }

    return (
        <>
            <div className="row divlogin mainmatch m-0 p-0">
                <div className="col-12 pt-5 px-5 oreder-1">
                    <button onClick={() => { window.history.back() }} className="butt btn btn-outline-light px-4"><AiOutlineArrowLeft /></button>
                </div>
                <div className="col-12  col-lg-6 p-2 mt-4 p-md-0 py-5 order-2 order-lg-1">
                    <div className="divlogin__backlogin p-0">
                        <div>

                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, praesentium ctetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisicing elit. <br />
                                Lorem ipsum dolor sit amet consectetur
                            </h3>
                        </div>

                    </div>

                </div>
                <div className="col-12 col-md-8  col-lg-6 px-4 pt-0 pe-md-4 ps-md-4 ps-lg-0 order-1 order-lg-2">
                    <div className="divlogin__login border-0 m-0">

                        <div className="bettingposter">
                            <div className="img">
                                <img src={Match.poster} alt="" />
                            </div>
                            <div className="title text-center p-0">
                                <video controls width="100%" height="100%">
                                    <source src="{props.newsprops.img} "type="video/webm" />
                                    <source src="{props.newsprops.img}" type="video/mp4" />
                                    <p>
                                        Your browser doesn't support HTML video. Here is a
                                        <a href="myVideo.mp4">link to the video</a> instead.
                                    </p>
                                </video>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="row matchbetting py-5 mb-5">
                {People == "" && (
                    <h5 className='ms-3 text-danger'>
                        You must login or register first
                        <h6></h6>
                        <NavLink className='text-primary' to='/login'>
                            Go to login
                        </NavLink>
                    </h5>
                )}
                <form className='row '>
                    <div className="col-6 p-1">
                        <div className="matchbetting__firstteam" style={DisibelStyle}>
                            <h2>
                                <p className='check active' name='fteam' id='fteam' onClick={e => Checkbox(e)}></p>
                                Contunio to accont
                            </h2>
                            <div className="title">
                                <div className="left">
                                    <p>{FTeam.name}</p>
                                    <p>Lorem ipsum dolor sit amet consectetur .</p>
                                    <label htmlFor="">Bonos</label>
                                    <input onChange={(e) => setBonos(e.target.value)} className='mt-2' disabled={DisibelF} step={5} min={0} max={People.status} type="number" name="" id="" />

                                </div>
                                <div className="right">
                                    <img src={FTeam.img} alt="" />
                                    <button type='button' disabled={DisibelF} onClick={Close} className="btn btn-outline-light px-4 mt-4">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 p-1">
                        <div className="matchbetting__firstteam" style={DisibelStyle}>
                            <h2>
                                <p className='check' name='lteam' id='lteam' onClick={e => Checkbox(e)}></p>
                                Contunio to accont
                            </h2>
                            <div className="title">
                                <div className="left">
                                    <p>{LTeam.name}</p>
                                    <p>Lorem ipsum dolor sit amet consectetur .</p>
                                    <label htmlFor="">Bonos</label>
                                    <input onChange={(e) => setBonos(e.target.value)} className='mt-2' disabled={DisibelL} step={5} min={0} max={People.status} type="number" name="" id="" />

                                </div>
                                <div className="right">
                                    <img src={LTeam.img} alt="" />
                                    <button type='button' onClick={Close} disabled={DisibelL} className="btn btn-outline-light px-4 mt-4">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
