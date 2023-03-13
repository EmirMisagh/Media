import React, { useEffect, useState } from 'react';
import { LodingNews } from './Loding'
import { AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin,AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";


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
      {Loding == 0 ? (
        <LodingNews />
      ) : (
        <div className='newsLg'>
          <div className="img">
            {props.newsprops.video == true ? (
              <>
                <div className="video">
                  <video  width="100%" height="100%">
                    <source src={props.newsprops.img} type="video/webm" />
                    <source src={props.newsprops.img} type="video/mp4" />
                    <p>
                      Your browser doesn't support HTML video. Here is a
                      <a href="myVideo.mp4">link to the video</a> instead.
                    </p>
                  </video>
                  <i>
                    <AiFillInstagram />
                  </i>
                </div>
              </>
            ) : (
              <>
                <img src={props.newsprops.img} alt="" />
              </>
            )}
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
