import React from 'react'
import "./HeaderSideToBox.css"
import cart from "../assets/icon-cart.svg"
import manPic from "../assets/image-avatar.png"
import { Popover,Badge } from 'antd'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import shoe from "../assets/image-product-1.jpg"
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useDispatch } from 'react-redux'
import {deletCart} from "../redux/IncriDicri"

const HeaderSideToBox = () => {
  const count = useSelector((state:any)=>state.user.cartValue);
  console.log(count);

  const dispech = useDispatch() 



  const text = <span><b> Cart </b></span>;

  const content = (
    <div className='cart-popup'>
    {count===0 && <div className='text_box'><p>Your cart is empty.</p></div>}
     {count !== 0 &&
     <>
      <div className='cartPhoto'>
       <img src={shoe} alt="" />
       <span>
       <p>Fall Limited Edition Sneakers</p>
       <p>$125.00 x {count} <b style={{color:"black"}}> ${count*125}.00 </b> </p>
       </span>
       <button onClick={()=>dispech(deletCart())}><RiDeleteBin6Line/></button> 
     </div>
     <div className='popButton' >
      <button>Checkout</button>
     </div>
     </>}
    

    </div>
  );

  return (
    <>
      <div className='SideBar-to-imgPic'>
        <Popover placement="bottom" title={text} content={content} trigger="click">
          <div className='fist-secParts'>
          <Badge className='cart-badge'count={count}>
          <img src={cart} alt="" />
         </Badge>
          </div>
        </Popover>
        <div className='second-secParts'>
          <img src={manPic} alt="" />
        </div>
      </div>

    </>
  )
}

export default HeaderSideToBox