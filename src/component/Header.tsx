import React from 'react'
import "./Header.css"
import HeaderSideBox from './HeaderSideBox'
import HeaderSideToBox from './HeaderSideToBox'
const Header = () => {
  return (
    <>
    <div className='toBox-section-main'>
   <HeaderSideBox/>
   <HeaderSideToBox/>
   </div>
    </>
  )
}

export default Header