import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { IoNotificationsOutline, IoMenu } from "react-icons/io5";
import Dashboard from './Dashboard';
import Bonos from './Bonos';
import API from '../../components/tools/Api'
import { useEffect } from 'react';

export function editUser() {
    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default function Index() {
    const [Menu, setMenu] = useState(0)
    const [People, setPeople] = useState({})
    const [EditUser, setEditUser] = useState({ img: '', id: 5 })
   


    useEffect(() => {
        const id = localStorage.getItem('token')

        API.get(`users/token/${id}`)
            .then(response => {
                setPeople(response.data.data)
            })

    }, [])

    const Loguot = () => {
        localStorage.removeItem('token')
        window.location.replace('/')
    }

    const ChangeImg = () => {
        const form = document.getElementById('img');
        const formData = new FormData(form);
        API.post(`users/image/${People._id}`, formData)
            .then(response => {
                console.log(response.data.img);
                setPeople({ ...People, img: response.data.img })

            });
    }

    const menuHandle = () => {
        const menu = document.getElementById('menu');
        if (Menu == 0) {

            menu.style.top = '60px';
            setMenu(1)
        } else {
            menu.style.top = '-190px';
            setMenu(0)
        }
    }

    const mainHandle = (e) => {
        const links = document.querySelectorAll('#navmain')
        links.forEach(link => {
            link.classList.remove('active')
            e.target.classList.add('active')
        })
        switch (e.target.innerHTML) {
            case 'Bonos':
                setMain(<Bonos shop={Shop} />)
                break;
            case 'Dashboard':
                setMain(<Dashboard />)
                break;

            default:
                break;
        }
    }

    const Shop = (e) =>{
        setPeople({ ...People, status: e })
    }
    const [Main, setMain] = useState(<Dashboard shop={Shop} />)
    return (

        <div className='container-fluid bodyPeople p-0'>
            <nav className='row p-0 bodyPeople__navbar'>
                <div className="col-4 menuicon">
                    <p onClick={menuHandle}>
                        <IoMenu />
                    </p>
                </div>
                <div className="col-4 col-md-1 c1 ">
                    <div className="logo">

                        <NavLink to='/'>
                            <h3>
                                VC
                            </h3>
                        </NavLink>
                    </div>
                </div>
                <div className="col-12 col-md-6  c2" id='menu'>
                    <div className="input">
                        <input type="text" name="" id="" placeholder='Search or jump to...' />
                            <div className="search">
                             
                            </div>
                    </div>
                    <strong>
                        Dashboard
                    </strong>
                    <strong>
                        Betting
                    </strong>
                    <strong>
                        Bonos
                    </strong>
                    <strong>
                        New match {EditUser.img}
                    </strong>
                </div>
                <div className="col-4 c3">
                    <div className="icons">
                        <i>
                            <IoNotificationsOutline />
                        </i>
                        <i>+</i>
                    </div>
                </div>
            </nav>
            <div className="bodyPeople__container-main">
                <div className='sidebar'>
                    <div className="profile">
                        <div className="avatar">
                            <form id='img'>
                                <input type="file" onChange={ChangeImg} name='Image' id="File" style={{ display: 'none' }} />
                                <label htmlFor="File">
                                    <small>select</small>
                                </label>
                                <img src={People.img == '' ? 'http://localhost:3001/image/users/1675942225556-b8ac6f27aa0f1184991337.jpg' : People.img} alt="" />
                            </form>
                            <div>

                                <h3>{People.fname}</h3>
                                <h5>{People.fname}{People.lname}</h5>
                            </div>
                        </div>
                        <div className="title">
                            <p>misagh.amir@yahoo.com</p>
                            <button>Edit profile</button>
                            <span className='mt-3'>{People.status} bonos</span>
                            <span className='mt-3'>30 bonos</span>
                            <span className='mt-3' onClick={Loguot}>Loguot</span>
                            {/* {editUser} */}
                        </div>
                    </div>
                </div>
                <div className=" maincontainer">
                    <div className="maincontainer__topbar">
                        <strong id='navmain' className='active' onClick={(e) => mainHandle(e)}>
                            Dashboard
                        </strong>
                        <strong id='navmain' onClick={(e) => mainHandle(e)}>
                            Betting
                        </strong>
                        <strong id='navmain' onClick={(e) => mainHandle(e)}>
                            Bonos
                        </strong>
                        <strong id='navmain' onClick={(e) => mainHandle(e)}>
                            New match
                        </strong>

                    </div>
                    <div className="maincontainer__main">
                        {Main}
                    </div>
                </div>
            </div>
        </div>
    )
}
