import React, { useState } from 'react'
import { useEffect } from 'react'
import API from '../../components/tools/Api'
import MatchResult from '../../components/MatchResult'

export default function Betting(props) {
  const [Matches, setMatches] = useState([])
  const [BettingState, setBettingState] = useState([])
  useEffect(() => {
    console.log(props.user)
    API.get('betting/client')
      .then(responce => {
        setBettingState(responce.data.data)
        console.log(responce.data.data)
      })
    API.get('match')
      .then(responce => {
        setMatches(responce.data.data.filter((elem) => props.user.match.find(({ id }) => elem._id === id)))


      })
  }, [])
  const Bett = (id) => {
    const bet = BettingState.find(i => i.idmatch == id)
    const b = 'amir'
    console.log(bet.idmatch)
    // let bonos = bet.idmatch;
    // return bonos;
    return (<> {bet.bonosf}
      <div className="row">
        <div className="col-4 text-center">
          <div>

            <small>
            {bet.bonosf} people <br /> 120 bonos <br /> closed
            </small>
          </div>
        </div>
        <div className="col-4 text-center">
          <div>
            <small>
              5 people <br /> 120 bonos <br /> closed
            </small>
          </div>
        </div>
        <div className="col-4 text-center">
          <div>
            <small>
              5 people <br /> 120 bonos <br /> closed
            </small>
          </div>
        </div>
        <hr className='mb-1' />
        <div className="col-6 text-left mt-0">
          <small>

            you 130 bonos in this betting
          </small>
        </div>
        <div className="col-6 text-left mt-0">
          <small>

            you 130 bonos in this betting
          </small>
        </div>
      </div>
    </>
    );
  }
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12 col-md-6">
          {Matches.map((match, i) => {
            return (
              i < 5 && (
                <>
                  <MatchResult game={match} />
                  <div className="row">
                    <div className="col-4 text-center">
                      <div>
                        <small>
                          5 people <br /> 120 bonos <br /> closed
                        </small>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div>
                        <small>
                          5 people <br /> 120 bonos <br /> closed
                        </small>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div>
                        <small>
                          5 people <br /> 120 bonos <br /> closed
                        </small>
                      </div>
                    </div>
                    <hr className='mb-1' />
                    <div className="col-6 text-left mt-0">
                      <small>

                        you 130 bonos in this betting
                      </small>
                    </div>
                    <div className="col-6 text-left mt-0">
                      <small>

                        you 130 bonos in this betting
                      </small>
                    </div>
                  </div>

                </>
              )
            )
          })}
        </div>

        <div className="col-12 col-md-6">
          {Matches.map((match, i) => {
            return (
              i < 10 && (
                <>
                  <MatchResult game={match} />
                  <div className="row">
                    <div className="col-4 text-center">
                      <div>
                        <small>
                          5 people <br /> 120 bonos <br /> closed
                        </small>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div>
                        <small>
                          5 people <br /> 120 bonos <br /> closed
                        </small>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div>
                        <small>
                          5 people <br /> 120 bonos <br /> closed
                        </small>
                      </div>
                    </div>
                    <hr className='mb-1' />
                    <div className="col-6 text-left mt-0">
                      <small>

                        you 130 bonos in this betting
                      </small>
                    </div>
                    <div className="col-6 text-left mt-0">
                      <small>

                        you 130 bonos in this betting
                      </small>
                    </div>
                  </div>
                </>
              )
            )
          })}
        </div>
      </div>
      {Bett('63f1fb9b9e0aaa5ddcc2dc2a')}
    </div>
  )
}
