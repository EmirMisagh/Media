import React, { useEffect, useState } from 'react'

export default function Notif() {
    const [Style,setStyle] = useState({})
    useEffect(() =>{
        const i = document.body.offsetHeight;
        console.log(i)
      
    },[])
    window.onscroll = () =>{
        if(window.pageYOffset >= 3315){
            alert('hi')
        }
    }
    return (
        <div className='container-fluid notifmain'>
            <div className="notif ">
                <div className="row">
                    <div className="col-4 fteam">
                        <div className="back"></div>
                        <img src="http://localhost:3001/image/teamlogo/Bayern 584d8683367b6a13e54477d4.png" alt="" />
                    </div>
                    <div className="col-4 live">
                        <button>LIVE</button>
                    </div>
                    <div className="col-4 lteam">
                        <div className="back"></div>
                        <img src="http://localhost:3001/image/teamlogo/Paris580b57fcd9996e24bc43c4d8.png" alt="" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-4">
                        Bayern Munikh
                    </div>
                    <div className="col-4">
                        H2 76:20
                    </div>
                    <div className="col-4">
                        Paris St Germain
                    </div>
                </div>
            </div>

        </div>
    )
}
