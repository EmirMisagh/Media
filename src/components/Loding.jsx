import React from 'react'
import { RiLoader4Line } from "react-icons/ri";

function LodingCom() {
    return (
        <div className='loding'>

<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

function LodingNews() {
    return (
        <div className='loding'>

<div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}

function LodingPoster() {
    return (
        <div className='loding'>

<div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export  {LodingCom, LodingNews, LodingPoster}
