import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import API from '../components/tools/Api'
import NewsSm from '../components/NewsSm';


export default function News() {
    const [News, setNews] = useState({})
    const [AllNews, setAllNews] = useState([])

    const { id } = useParams()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        API.get(`news/${id}`)
            .then(response => {
                setNews(response.data.data)
            })
        API.get(`news`)
            .then(res => {
                setAllNews(res.data.data)
            })
    }, [id])
    return (
        <>
            <div className="container-fluid main newspage p-0">
                <div className="col-12 pt-4 pt-md-5 px-5 oreder-1">
                    <NavLink to={'/'} >
                        <button className="butt btn btn-outline-light px-4"><AiOutlineArrowLeft /></button>
                    </NavLink>
                </div>
                <div className="row py-0 newspage__news">
                    <div className="col-12 col-lg-6 pt-2  py-md-5 order-2 order-lg-1 ">
                        <div className=" left">
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
                    <div className="col-12 col-md-8  col-lg-6 px-4 pt-3 pt-md-0 pe-md-4 ps-md-4 ps-lg-0 order-1 order-lg-2 ">
                        <div className=" border-0 m-0 right">
                            {News.video === true ? (
                                <video controls src={News.img}>
                                    <source src={News.img} type="video/mp4" />
                                    <source src={News.img} type="video/webm" />
                                    <p>
                                        Your browser doesn't support HTML video. Here is a
                                        <a href="myVideo.mp4">link to the video</a> instead.
                                    </p>
                                </video>

                            ) : (
                                <img src={News.img} alt="" />
                            )}

                        </div>
                    </div>
                </div>
                <div className="container mt-0 pt-0 mt-md-5 pt-md-5">
                    <div className="row main__newsgrid border-0 mt-5">
                        <div className="newsgrid g-3-3-3 col-12">
                            <div className=''>
                                {AllNews.map((newes, i) => {
                                    if (i < 1)
                                        return (
                                            <>

                                                <NavLink to={`/news/${newes._id}`} key={i}>

                                                    <NewsSm news={newes} clas={'newsSmTak'} />
                                                </NavLink>
                                            </>

                                        )
                                })}
                            </div>
                            <div className='newsscreen'>
                                {AllNews.map((newes, i) => {
                                    if (i < 3)
                                        return (
                                            <>

                                                <NavLink to={`/news/${newes._id}`} key={i}>

                                                    <NewsSm news={newes} clas={'newsSmSC'} />
                                                </NavLink>
                                            </>

                                        )
                                })}
                            </div>
                            <div className='newsscreen'>
                                {AllNews.map((newes, i) => {
                                    if (i < 1)
                                        return (
                                            <>

                                                <NavLink to={`/news/${newes._id}`} key={i}>

                                                    <NewsSm news={newes} clas={'newsSmSC'} />
                                                </NavLink>
                                            </>

                                        )
                                })}
                            </div>
                        </div>
                        <div className="newsgrid g-3-3-2-2 col-12">
                            {AllNews.map((newes, i) => {
                                if (i < 24)
                                    return (
                                        <NavLink to={`/news/${newes._id}`} key={i}>
                                            <NewsSm news={newes} />
                                        </NavLink>
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
