import React, { useState } from 'react'
import "./FirstSectione.css"
import product1 from "../assets/image-product-1.jpg"
import product2 from "../assets/image-product-2.jpg"
import product3 from "../assets/image-product-3.jpg"
import product4 from "../assets/image-product-4.jpg"
import { Button, Modal } from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {BsChevronLeft,BsChevronRight} from  'react-icons/bs';


const FirstSectione = () => {

  const [image, setImage] = useState(product1);

  const imegecheng = (e: any) => {
    setImage(e.target.src);
  }

  const [modal1Open, setModal1Open] = useState(false);

  return (
    <div className='image-product-main-Box'>
      <div className='product-one-sec'>
        <img src={image} alt=""   onClick={() => setModal1Open(true)}/>
        <Modal
        footer = {null}
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
      <Carousel>

                <div className='popModal-photo'>
                    <img src={product1} />
                </div>
                <div>
                    <img src={product2}/>
                </div>
                <div>
                    <img src={product3} />
                </div>
                <div>
                    <img src={product4} />
                </div>
              
            </Carousel>
            <div>
              <span className='prev_span'><BsChevronLeft className='prev_arrow'/></span>
              <span className='next_span'><BsChevronRight className='next_arrow' /></span>
            </div>

      </Modal>


      </div>
      <div className='product-toPart-sec'>
        <div className={`imgBox ${image.includes(product1)&& 'active'}`}>
        <img src={product1} alt="" onClick={imegecheng} className={`${image.includes(product1) ? 'photo-blur' : 'chang-border'}`} />
        </div>
        <div className={`imgBox ${image.includes(product2)&& 'active'}`}>
        <img src={product2} alt="" onClick={imegecheng} className={`${image.includes(product2) ? 'photo-blur' : 'chang-border'}`} />
        </div>
        <div className={`imgBox ${image.includes(product3)&& 'active'}`}>
        <img src={product3} alt="" onClick={imegecheng} className={`${image.includes(product3) ? 'photo-blur' : 'chang-border'}`} />
        </div>
        <div className={`imgBox ${image.includes(product4)&& 'active'}`}>
        <img src={product4} alt="" onClick={imegecheng} className={`${image.includes(product4) ? 'photo-blur' : 'chang-border'}`} />
      </div>
      </div>

    </div>
  )
}

export default FirstSectione