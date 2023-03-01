import React from 'react'

export default function Menu(props) {
  return (
    <>
      <div className={`${props.class.menu}`} id='menu'>
        Menu
      </div>
      <div className={`${props.class.saye}`} onClick={props.handle}>

      </div>
    </>
  )
}
