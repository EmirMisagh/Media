import Chart from '../../components/Charts'
import Matches from '../../components/Matches'
import React, { useState, useEffect } from 'react'
import API from '../../components/tools/Api'
import { NavLink, useParams } from "react-router-dom";

export default function Dashboard(props) {
  const [BonosBuy, setBonosBuy] = useState(0)
  const [BonosSel, setBonosSel] = useState(0)
  const [People, setPeople] = useState({})
  const [ComputingS, setComputingS] = useState(0)
  const [Matchs, setMatchs] = useState([])

  useEffect(() => {
    const id = localStorage.getItem('token')

    API.get(`users/token/${id}`)
        .then(response => {
            setPeople(response.data.data)
        })
        API.get(`match`)
        .then(responce => {
          setMatchs(responce.data.data)
        })
}, [])

  const body = { BonosBuy }

  const BuyHandle = () => {
    API.patch(`users/bonos/buy/${People._id}`, body)
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
    <div className=' container-fluid dashboard'>
      <Chart />
      <div className="row Bonos pb-5 mt-0">
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
        </div>
      </div>
      <div className="matchgrid-people">
        {Matchs.map((match, i) =>{
          return(
            <>
            <Matches key={i} game={match} />
            <div></div>
            <Matches key={i} game={match} />
            </>
          )
        })}
        {/* <NavLink to='/football/match'>
          <Matches game={row} />
        </NavLink>
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} />
        <Matches game={row} /> */}
      </div>
    </div>
  )
}
