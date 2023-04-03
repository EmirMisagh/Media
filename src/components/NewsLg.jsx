import React, { useEffect, useState } from 'react';
import { LodingNews } from './Loding'
import { AiFillInstagram } from "react-icons/ai";


export default function NewsLg(props) {
  const [Loding, setLoding] = useState(0)

  const date = new Date(props.newsprops.date)

  useEffect(() => {


    setLoding(1)
  }, [])

  const cutString = (string) => {
    let name = string
    name = name.split(' ')
    name = name.splice(0, 22)
    name = name.join(' ');

    return name + "...";
  }

  return (
    <>
      {Loding === 0 ? (
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
              <p>{cutString(props.newsprops.Description)}</p>
              <small className="date">{date.getFullYear()}/{date.getMonth()}/{date.getDay()}</small>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
