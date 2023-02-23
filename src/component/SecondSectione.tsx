import React from 'react'
import "./SecondSectione.css"
import { BsCart3 } from "react-icons/bs"
import { decrement, increment,addCart} from '../redux/IncriDicri';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const SecondSectione = () => {
    const dispatch = useDispatch()
    const count = useSelector((state:any)=>state.user.value);



    return (
        <div className='second-para-head'>
            <div className='sneaker-company'>
                <h5>SNEAKER COMPANY</h5>
                <h1>Fall Limited Edition <br />sneakers</h1>
                <p>These Low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole. they'll <br /> withstand everything the weather can offer. </p>
            </div>
            <div className='dolor-sine-logo'>
                <div className='prise-chang'>
                    <h2>$125.00</h2>
                </div>
                <div className='discount-btn'>
                    <button>50%</button>
                </div>
            </div>
            <div className='only-one-reject-btn'>
            <h6>$250.00</h6>
            </div>

            <div className='incdinAndCart-sec'>
                <div className='lastTo-incurs-btn'>
                    <button onClick={()=>{dispatch(decrement())}}>-</button>
                     <span>{count}</span>
                    <button onClick={()=>{dispatch(increment())}}>+</button>
                </div>
                <div className='cart-secBtn'>
                    <button onClick={()=>{dispatch(addCart())}} ><BsCart3 /> Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default SecondSectione