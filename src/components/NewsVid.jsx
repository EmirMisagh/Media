import { AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin,AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import {LodingNews, LodingCom} from './Loding'

export default function NewsVid() {
    const [Loding, setLoding] = useState(0)
    useEffect(() =>{



      
        setTimeout(() => {
      
            setLoding(1)
          }, 2000);
    },[])
  return (
    <>
    {Loding == 0 ? (
      <LodingCom />
    ) : (
    <div className='newsVid'>
        <div className="video">
            <video controls width="100%" height="100%">
                <source src="myVideo.webm" type="video/webm" />
                <source src="myVideo.mp4" type="video/mp4" />
                <p>
                    Your browser doesn't support HTML video. Here is a
                    <a href="myVideo.mp4">link to the video</a> instead.
                </p>
            </video>
            <i>
                <AiFillInstagram />
            </i>
        </div>
        <div className="title">
            <small className="headsmall">Manchester united</small>
            <h6 className="">Cristiano Ronaldo</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditat</p>
            <small className="date">12/5/2023</small>
        </div>
    </div>
    )}
    </>
  )
}
