import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin,AiOutlineSearch } from "react-icons/ai";

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-info p-0 mt-5 mb-0">
        <div className="container-fluid footer" id="footer-blue">
            <div className="row footer__start  ">
                <div className="col-12 ">
                    <p>Follow us</p>
                    <i><AiFillInstagram /></i>
                    <i><AiFillTwitterCircle /></i>
                    <i><BsFacebook /></i>
                    <i><AiFillLinkedin /></i>
                    <i><AiFillInstagram /></i>
                </div>
                <div className="col-12 mt-3 ">
                    <p>All memberships will be billed automatically on a recurring basis until canceled. If eligible for a free trial, cancel before the trial ends to avoid being charged. Offer only valid for new paid subscribers. See full terms of service here.</p>
                    <p>© Skillshare, Inc. 2022</p>
                </div>
            </div>
        </div>
        <div className="container-fluid footer ">
            <div className="row footer__midle ">
                <div className="col-12 text-center mb-5">
                    Teacher Directory : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                    
                </div>
                <div className="col-6 mt-4 col-md-3">
                    <h5 className="fw-bold h5">Creative</h5>

                    <p className="mt-4">Animation</p>
                    <p>Drawing</p>
                    <p>Graphic Design</p>
                    <p>Illustration</p>
                    <p>Photography</p>
                    <p className="text-info">More</p>
                </div>
                <div className="col-6 mt-4 col-md-3">
                    <h5 className="fw-bold h5">Business</h5>

                    <p className="mt-4">Entrepreneurship</p>
                    <p>Freelance & Entrepreneurship</p>
                    <p>Leadership</p>
                    <p>Marketing</p>
                    <p>Productivity</p>
                    <p className="text-info">More</p>
                </div>
                <div className="col-6 mt-4 col-md-3">
                    <h5 className="fw-bold h5">Business</h5>

                    <p className="mt-4">Entrepreneurship</p>
                    <p>Freelance & Entrepreneurship</p>
                    <p>Leadership</p>
                    <p>Marketing</p>
                    <p>Productivity</p>
                    <p className="text-info">More</p>
                </div>
                <div className="col-6 mt-4 col-md-3">
                    <h5 className="fw-bold h5">Creative</h5>

                    <p className="mt-4">Animation</p>
                    <p>Drawing</p>
                    <p>Graphic Design</p>
                    <p>Illustration</p>
                    <p>Photography</p>
                    <p className="text-info">More</p>
                </div>
            </div>
        </div>
        <div className="container-fluid footer pb-0 mb-0" id="footer-blue">
            <div className="row footer__end  pt-4">
                <div className="row" id="tozih">

                    <div className="col-3">
                        <h5 className="fw-bold h5">Company</h5>
                        <p className="mt-4">About</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>Affiliates</p>
                        <p>Partnerships</p>
                    </div>
                    <div className="col-3">
                        <h5 className="fw-bold h5">Community</h5>
                        <p className="mt-4">Team Plans</p>
                        <p>Refer a Friend</p>
                        <p>Limited Memberships</p>
                        <p>Scholarships</p>
                        <p>Free Classes</p>
                    </div>
                    <div className="col-3">
                        <h5 className="fw-bold h5">Teaching</h5>
                        <p className="mt-4">Become a Teacher</p>
                        <p>Teacher Help Center</p>
                    </div>
                    <div className="col-3">
                        <h5 className="fw-bold h5">Mobile</h5>
                        <button className="mt-2">App Store</button><br />
                        <button>Goole Play</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bottom ">
                        <ul className='row'>
                            <li className='col-12 col-sm-auto'>© Skillshare, Inc. 2022</li>
                            <li className='col-12 col-sm-auto'>Help</li>
                            <li className='col-12 col-sm-auto'>Privacy</li>
                            <li className='col-12 col-sm-auto'>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
