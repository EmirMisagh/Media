import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const user = { email, password }
    const Login = async () => {
        console.log(email, password)
        await axios.post(`http://localhost:3001/users/login`, user).then(res => {
            console.log(res.data.data)
            localStorage.setItem('token', res.data.token)
            if (res.data.data != null)
                if (res.data.admin == 'admin'){
                    window.location.replace('http://localhost:3000/')
                    localStorage.setItem('admin', res.data.admin)
                }
                else
                    window.location.replace('/people')
        })
    }

    // useEffect(() => {

    // }, [])
    return (
        <>
            <div className="row divlogin">
                <div className="col-12 pt-5 px-5 oreder-1">
                    <NavLink to='/'>
                        <button className="butt btn btn-outline-light px-4"><AiOutlineArrowLeft /></button>
                    </NavLink>
                </div>
                <div className="col-12  col-lg-8 p-2 mt-5 p-md-0 py-5 order-2 order-lg-1">
                    <div className="divlogin__backlogin p-0">
                        <div>

                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, praesentium ctetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisicing elit. <br />
                                Lorem ipsum dolor sit amet consectetur
                            </h3>
                        </div>
                        <div className="pm">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga eligendi in accusantium explicabo labore, exercitationem ab consectetur aut perspiciatis.</p>
                            <div className="divlogin__google">
                                <button>Sigin with Google</button><br />
                                <button>Sigin with Facebooke</button><br />
                                <button>Sigin with Linkdin</button><br />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-8  col-lg-4 p-4 pe-md-4 ps-md-4 ps-lg-0 order-1 order-lg-2">
                    <div className="divlogin__login border-0 mt-3">
                        <h2>Login</h2>
                        <h5>Contunio to accont</h5>
                        <label className="mt-5" htmlFor="">Email</label><br />
                        <input type="text" onChange={e => setemail(e.target.value)} placeholder="Misagh.Amir@yahoo.com" name="email" /><br />
                        <label htmlFor="">Password</label><br />
                        <input type="password" onChange={e => setpassword(e.target.value)} placeholder="05D44g_@12" name="password" /><br />
                        <button onClick={Login} className="btn btn-outline-light px-4">
                            login
                        </button>
                        <NavLink to='/signin'>
                            <small className="ps-2">
                                Create a accont
                            </small>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
