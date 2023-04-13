import React, { useEffect, useState } from 'react';
import { LodingCom } from './Loding'
import { AiFillPlayCircle } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";


export default function NewsSm(props) {
  const [Loding, setLoding] = useState(0)

  const date = new Date(props.news.date)

  useEffect(() => {
    
    setTimeout(() => {

      setLoding(1)
    }, 2000);
  }, [])

  const cutString = (string, num) => {
    let name = string
    name = name.split(' ')
    if (name.length > num) {

      name = name.splice(0, num)
      name = name.join(' ');

      return name + "...";
    } else {
      name = name.join(' ');
      return name;
    }
  }

  return (
    <>
      {Loding === 0 ? (
        <LodingCom />
      ) : (
        <div className={`newsSm ${props.clas}`}>
          <div className="img">
            {props.news.video === true ? (
              <>
                <div className="video m-0">
                  <video>
                    <source src={props.news.img} type="video/webm" />
                    <source src={props.news.img} type="video/mp4" />
                    <p>
                      Your browser doesn't support HTML video. Here is a
                      {/* <a href="myVideo.mp4">link to the video</a> instead. */}
                    </p>
                  </video>
                  <div className="icon">
                    <i>
                      <FaPlayCircle />
                    </i>
                  </div>
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
            <h6 className="">{cutString(props.news.head, 5)}</h6>
            <p>{cutString(props.news.Description, 11)}</p>
            <small className="date">{date.getFullYear()}/{date.getMonth()}/{date.getDay()}</small>
          </div>
        </div>
      )}
    </>
  )
}
