import React, { useState, useEffect } from 'react'
import API from '../../components/tools/Api'
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Bonos(props) {
  const [BonosBuy, setBonosBuy] = useState(0)
  const [BonosSel, setBonosSel] = useState(0)
  const [People, setPeople] = useState({})
  const [ComputingS, setComputingS] = useState(0)

  const body = { BonosBuy }
  const bodySel = { BonosSel }

  useEffect(() => {
    const id = localStorage.getItem('token')

    API.get(`users/token/${id}`)
        .then(response => {
            setPeople(response.data.data)
        })

}, [])

  const BuyHandle = () => {
    API.patch(`users/bonos/buy/${People._id}`, body)
      .then(response => {
        props.shop(response.data.data)
        toast.success(response.data.data, {
          position: toast.POSITION.BOTTOM_CENTER,
          className: 'toast-message'
      });
      })
  }

  const SelHandle = () => {
    API.patch(`users/bonos/sel/${People._id}`, bodySel)
      .then(response => {
        props.shop(response.data.data)
      })
  }

  const Computing = (e) =>{
    let event = e.target.value;
    setComputingS(event * 5000)
    setBonosBuy(event)
  }

  return (
    <div className="container-fluid">
      <div className="row Bonos pb-5">
        <div className="col-1 Bonos__title">
          <div className='item'>
            <small>B</small>
            <small>U</small>
            <small>Y</small>
            <small>B</small>
            <small>O</small>
            <small>N</small>
            <small>O</small>
            <small>S</small>
          </div>
          <div className='item'>
            <small>S</small>
            <small>E</small>
            <small>L</small>
            <small>B</small>
            <small>O</small>
            <small>N</small>
            <small>O</small>
            <small>S</small>
          </div>
          <div className='item'>
            <small>M</small>
            <small>O</small>
            <small>V</small>
            <small>E</small>
            <small>B</small>
            <small>O</small>
            <small>N</small>
            <small>O</small>
            <small>S</small>
          </div>
        </div>
        <div className="col-10 main p-0 ">
          <div className='usernew'>
            <div className="userContainer">
              <div className="userUpdate">
                <span className="title">Buy bonos</span>
                <form className="updateForm">
                  <div className="updateLeft">
                    <div className="updateItem">
                      <label htmlFor="">Bonos</label>
                      <input type="number" min={0} onChange={e => Computing(e)} placeholder='0'  />
                    </div>
                    <div className="updateItem">
                      <label htmlFor="">Continent</label>
                      <input type="text" value='5000T' disabled placeholder='Toman'  />
                    </div>
                    <div className="updateItem">
                      <label htmlFor="">Computing</label>
                      <input type="number" placeholder='0' disabled value={ComputingS}  />
                    </div>
                  </div>
                  <div className="updateRight">
                    <div className="updateUpload">

                      <label htmlFor="file"></label>
                      <input type="file"  id="file" style={{ display: 'none' }} />
                    </div>
                    <button type='button' onClick={BuyHandle} className='btn btn-outline-primary px-5' >Buy</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='usernew'>
            <div className="userContainer">
              <div className="userUpdate">
                <span className="title">Create</span>
                <form className="updateForm">
                  <div className="updateLeft">
                    <div className="updateItem">
                      <label htmlFor="">Bonos</label>
                      <input type="number" onChange={e => setBonosSel(e.target.value)} min={0} max={People.status} placeholder='0'  />
                    </div>
                    <div className="updateItem">
                      <label htmlFor="">Continent</label>
                      <input type="text" value='4900T ' disabled placeholder='Emir Misagh'  />
                    </div>
                    <div className="updateItem">
                      <label htmlFor="">Computing</label>
                      <input type="number" placeholder='0' disabled  />
                    </div>
                  </div>
                  <div className="updateRight">
                    <div className="updateUpload">

                      <label htmlFor="file"></label>
                      <input type="file"  id="file" style={{ display: 'none' }} />
                    </div>
                    <button type='button' onClick={SelHandle} className='btn btn-outline-primary px-5' >Sell</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='usernew'>
            <div className="userContainer">
              <div className="userUpdate">
                <span className="title">Create</span>
                <form className="updateForm">
                  <div className="updateLeft">
                    <div className="updateItem">
                      <label htmlFor="">Bonos</label>
                      <input type="number" placeholder='0'  />
                    </div>
                    <div className="updateItem">
                      <label htmlFor="">Continent</label>
                      <input type="text" placeholder='Emir Misagh'  />
                    </div>
                    <div className="updateItem">
                      <label htmlFor="">Nickname</label>
                      <input type="text" placeholder='Misagh.Amir@yahoo.com'  />
                    </div>
                  </div>
                  <div className="updateRight">
                    <div className="updateUpload">

                      <label htmlFor="file"></label>
                      <input type="file"  id="file" style={{ display: 'none' }} />
                    </div>
                    <button type='button' className='btn btn-outline-primary px-5' >Move</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
