import React from 'react'
import "./HeaderSideBox.css"
import sinecure from "../assets/logo.svg"

const HeaderSideBox = () => {
  return (
    <>
     <div className='main-header-section'>
        <div className='header-logo-part'>
            <img src={sinecure} alt="" />
        </div>
        <div className='menuBar-sec'>
            <ul>
                <li>Collections <div className='hover_box'></div> </li>
                <li>Men <div className='hover_box'></div> </li>
                <li>Women <div className='hover_box'></div> </li>
                <li>About <div className='hover_box'></div></li>
                <li>Contact <div className='hover_box'></div></li>
            </ul>
        </div>

    </div>
    
    </>
  )
}

export default HeaderSideBox