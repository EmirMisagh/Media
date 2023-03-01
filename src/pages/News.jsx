import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import API from '../components/tools/Api'


export default function News() {
    const [News, setNews] = useState({})

    const { id } = useParams()

    useEffect(() => {
        API.get(`news/${id}`)
            .then(response => {
                setNews(response.data.data)
            })
    }, [])
    return (
        <>
            <div className="row divlogin m-0 p-0">
                <div className="col-12 pt-5 px-5 oreder-1">
                    <button onClick={() => { window.history.back() }} className="butt btn btn-outline-light px-4"><AiOutlineArrowLeft /></button>
                </div>
                <div className="col-12  col-lg-6 p-2 mt-4 p-md-0 py-5 order-2 order-lg-1">
                    <div className="divlogin__backlogin p-0">
                        <div>
                            <small>
                                {News.title}
                            </small>
                            <h3>
                                {News.head}
                            </h3>
                            <p>
                                {News.Description}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit explicabo, nisi pariatur quaerat vitae aliquam atque perspiciatis ipsam accusamus necessitatibus.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="col-12 col-md-8  col-lg-6 px-4 pt-0 pe-md-4 ps-md-4 ps-lg-0 order-1 order-lg-2">
                    <div className="divlogin__login border-0 m-0">

                        <img src={News.img} alt="" />

                    </div>
                </div>
            </div>

        </>
    )
}
