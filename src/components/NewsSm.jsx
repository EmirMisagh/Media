import React, { useEffect, useState } from 'react';
import { LodingCom } from './Loding'
import { AiFillInstagram } from "react-icons/ai";


export default function NewsSm(props) {
  const [Loding, setLoding] = useState(0)

  const date = new Date(props.news.date)

  useEffect(() => {

    setTimeout(() => {

      setLoding(1)
    }, 2000);
  }, [])

  const cutString = (string) => {
    let name = string
    name = name.split(' ')
    name = name.splice(0, 14)
    name = name.join(' ');

    return name + "...";
}

  return (
    <>
      {Loding == 0 ? (
        <LodingCom />
      ) : (
        <div className='newsSm'>
          <div className="img">
            {props.news.video == true ? (
              <>
                <div className="video">
                  <video controls width="100%" height="100%">
                    <source src={props.news.img} type="video/webm" />
                    <source src={props.news.img} type="video/mp4" />
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
                <img src={props.news.img} alt="" />
              </>
            )}
          </div>
          <div className="title">
            <small className="headsmall">{props.news.title}</small>
            <h6 className="">{props.news.head}</h6>
            <p>{cutString(props.news.Description)}</p>
            <small className="date">{date.getFullYear()}/{date.getMonth()}/{date.getDay()}</small>
          </div>
        </div>
      )}
    </>
  )
}
