import React from 'react'

export default function LiveVideo() {
  return (
    <div className="row mainvideo">
    <div className="col-12 col-md-4 order-1 order-md-2 video">
      <video controls width="100%" height="100%">
        <source src="myVideo.webm" type="video/webm" />
        <source src="myVideo.mp4" type="video/mp4" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="myVideo.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>
    <div className="col-12 col-md-8 order-1 order-md-2 title">
      <h1>Paris St Germain v Bayern Munich ghfghf</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic quos id architecto temporibus, tempora quaerat blanditiis incidunt impedit ea odit saepe, ad optio nesciunt assumenda! Aperiam placeat sit est?</p>

    </div>
  </div>
  )
}
