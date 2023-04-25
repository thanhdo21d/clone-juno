import React,{useState} from 'react'
import Img5 from "../../assets/image/instargam/img-5.webp"
import Img6 from "../../assets/image/instargam/img-6.webp"
import Img7 from "../../assets/image/instargam/img-7.webp"

import styled from 'styled-components'

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
};
  return (
      <Selection>
          <div>
              
         
          <div className='container mx-auto mt-20'>
              <hr/>
              <div className='grid grid-cols-3 gap-12 mt-10'>
                  <div className="">
                      <p className='leading-8 tracking-wider font-extralight'>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</p>
                      <span className='pt-2 pb-2'>1800 1162</span>
                      <p className='leading-8 tracking-wider font-extralight pb-2' >Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                      <p className='leading-8 tracking-wider font-extralight pb-2' >GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</p>
                      <span>1800 1160</span>
                      <p className='leading-8 tracking-wider font-extralight pt-2'>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                  </div>
                  {/*  */}
                  <div>
                      <h1 className='leading-8 tracking-wider font-extralight'>HỆ THỐNG SHOWROOM</h1>
                      <img className="my-3" src={Img5} />
                      <a className='leading-8 tracking-wider font-extralight' href='facebook.com'>Xem địa chỉ hệ thống 68 showroom </a>
                      <hr/>
                  </div>
                  {/*  */}

                   <div>
                      <h2 className='leading-8 tracking-wider font-extralight'>FANPAGE CỦA CHÚNG TÔI</h2>
                      <img className="my-3" src={Img6} />
                      <div className='flex gap-6 ml-2'>
                          <i className="fab fa-facebook text-[25px] cursor-pointer"></i>
                          <i className="fab fa-twitter text-[25px] cursor-pointer"></i>
                          <i className="fab fa-youtube text-[25px] cursor-pointer"></i>
                          <i className="fab fa-instagram text-[25px] cursor-pointer"></i>
                          <i className="fab fa-google text-[25px] cursor-pointer"></i>
                      </div>
                  </div>
              </div>
              </div>
               </div>
          {/*  */}
          <div className='mt-10 w-full h-[70px]'  style={{backgroundColor:'rgba(0,0,0,0.07)'}}>
              
               <div className='flex gap-32 pt-5 pl-4'>
        <h2 className="cursor-pointer dropdown relative ease-in-out transition-all" onClick={handleDropdownToggle}>
            HỖ TRỢ KHÁCH HÀNG <i className="fa fa-chevron-down"></i>
        </h2>
        {isDropdownOpen && (
            <div className="absolute mt-10 ">
                <ul>
                    <li className='leading-8 tracking-wider font-extralight'>Hướng dẫn chọn cỡ giày</li>
                    <li className='py-2 leading-8 tracking-wider font-extralight'>Chính sách đổi trả</li>
                    <li className='leading-8 tracking-wider font-extralight'>Thanh toán giao nhận</li>
                    <li className='leading-8 tracking-wider font-extralight'>Chính sách bảo mật</li>
                    <li className='leading-8 tracking-wider font-extralight'>Câu hỏi thường gặp</li>
                    <li className='leading-8 tracking-wider font-extralight'>Chính sách khách hàng thân thiết</li>
                    <li className='leading-8 tracking-wider font-extralight'>Hướng dẫn mua hàng Online</li>
                              
                </ul>
            </div>
        )}
        <h3 className="cursor-pointer">VỀ JUNO <i className="fa fa-chevron-down"></i></h3>
    </div>
             
          </div>
           <div className=' flex justify-between items-center mt-10'  >
                  <div>
                  <p className='leading-8 tracking-wider font-extralight'>© Công ty Cổ phần Seedcom Fashion Group</p>
                  </div>
                  <div>
                      <img src={Img7} />
                      <p className='leading-8 tracking-wider font-extralight'>Powered by Haravan Enterprise.</p>
                  </div>
              </div>
    </Selection>
  )
}

export default Footer

const Selection = styled.div`
    .my-3{
         transition: all .2s ease-in-out;
        &:hover{
        transform: scale(0.9) ;
        }
    }
    .fab{
          transition: all .2s ease-in-out;
        &:hover{
        transform: scale(1,002) ;
       
        }
    }
    .dropdown{
         transition: all .7s ease-in-out;

    }

`