import React, { useEffect, useState } from 'react';
import {LodingNews} from './Loding'

export default function NewsLg(props) {
  const [Loding, setLoding] = useState(0)
  useEffect(() =>{
  
    
    setLoding(1)
  },[])
  return (
    <>
    {Loding == 0 ? (
      <LodingNews />
    ) : (
    <div className='newsLg'>
        <div className="img">
            <img src={props.newsprops.img} alt="" />
        </div>
        <div className="title">
            <div className="atterbut">
                <small className="headsmall">{props.newsprops.title}</small>
                <h6 className="">{props.newsprops.head}</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditat Cupiditat Cupiditat ipsum dolor sit amet consectetur,</p>
                <small className="date">{props.newsprops.date}</small>
            </div>
        </div>
    </div>
    )}
    </>
  )
}
