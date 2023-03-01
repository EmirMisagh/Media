import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import API from '../components/tools/Api'

export default function Signin() {
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Disabled, setDisabled] = useState(false)

  const User = { Fname, Lname, Email, Password, Admin: 'user' }

  const email = (e) =>{
    if(e.target.value != ''){
      setEmail(e.target.value)
      API.get(`users/email/${e.target.value}`)
      .then(responce =>{
        setDisabled(responce.data.data)
        // alert('not this email')
      })
    }
  }

  const create = () =>{
    API.post(`users/signin`, User)
    .then(response => {
      alert(response.data.data);
      localStorage.setItem('token', response.data.token)
      window.location.replace('/people')
    })
  }
  return (
    <>
            <div className="row divlogin">
                <div className="col-12 pt-5 px-5 oreder-1">
                    <NavLink to='/'>
                        <button className="butt"><AiOutlineArrowLeft /></button>
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
                    <div className="divlogin__login">
                        <h2>Sign in</h2>
                        <h5>Contunio to accont</h5>
                        <label htmlFor="">Email</label><br />
                        <input type="text" onChange={e => email(e)} placeholder="Misagh.Amir@yahoo.com" name="email" /><br />
                        <label htmlFor="">Name</label><br />
                        <input type="text" onChange={e => setFname(e.target.value)} placeholder="Emir" name="name" /><br />
                        <label htmlFor="">Last Name</label><br />
                        <input type="text" onChange={e => setLname(e.target.value)} placeholder="Misagh" name="lname" /><br />
                        <label htmlFor="">Password</label><br />
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="05D44g_@12" name="password" /><br />
                        <button className="btn btn-outline-light px-4" onClick={create} disabled={Disabled}>
                            login
                        </button>
                        <NavLink to='/login'>
                            <small className="ps-2">
                                I have a accont
                            </small>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
  )
}
