import React, { useEffect, useState } from 'react';
import {LodingNews} from './Loding'


export default function Stiker(props) {
  const [Loding, setLoding] = useState(0)
  useEffect(() =>{
  
    setTimeout(() => {
      
      setLoding(1)
    }, 2000);
  },[])
  const cutString = (string) => {
    let name = string
    name = name.split(' ')
    name = name.splice(0, 2)
    name = name.join(' ');

    return name ;
}
  return (
    <>
    {Loding == 0 ? (
      <LodingNews />
    ) : (
    <div className='stiker'>
        <div>
            <img src={props.news.img} alt="" />
        </div>
        <p>{cutString(props.news.head)}</p>
    </div>
    )}
    </>
  )
}
