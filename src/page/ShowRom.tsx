import React from 'react'
import Banner1 from "../assets/image/masthead_WW_DI3.webp"
import Banner2 from "../assets/image/instargam/img-8.webp"
import Banner3 from "../assets/image/instargam/img-9.webp"
import Banner4 from "../assets/image/instargam/img-10.webp"


import {BsSearch} from "react-icons/bs"
import Footer from '../components/footer/Footer'
const ShowRom = () => {
  return (
      <div>
          <img className="w-full h-[700px]" src={Banner1} />

          <div className='container mx-auto mt-10'>
              <h1 className=' leading-6	 text-center text-[30px] font-extralight tracking-wider	'>TÌM SHOWROOM</h1>
              <p className='leading-6 font-extralight tracking-wider pt-5 text-center'>JUNO hiện đang có mặt tại 68 showroom trên toàn quốc. Chọn ngay để biết showroom gần bạn nhất!</p>
    
              <div className='flex gap-8 justify-center items-center mt-10'>
                  <div className="w-[300px] border-2 h-[40px] cursor-pointer pl-2 pt-1 ">
                      <select className='pt-1 font-extralight tracking-wider leading-6'>
                          <p>Chọn tỉnh/thành phố</p>
                          <option className='fixed'>Chọn tỉnh/thành phố</option>
                          <option className=''>Hà Nội</option>
                          <option className=''>Hải Phòng</option>
                          <option className=''>Thái Bình</option>
                          <option className=''>Bắc Giang</option>
                          <option className=''>Bắc Ninh</option>
                          <option className=''>Nghệ An</option>
                          <option className=''>Cao Bằng</option>
                          <option className=''>Cà Mau</option>
                          <option className=''>Bến Tre</option>
                          <option className=''>Hưng Yên</option>
                          <option className=''>Hà Giang</option>
                          <option className=''>Đà Nẵng</option>
                      </select>
                  </div>

                  <div className="w-[300px] border-2 h-[40px] cursor-pointer">
                      <select className='pt-1 font-extralight tracking-wider leading-6'>
                          <option >Chọn quận/huyện </option>
                         </select>
                  </div>

                     <div className="w-[300px] relative  h-[40px] flex cursor-pointer">
                      <input placeholder='Search' className="w-[250px] border-2 h-[40px] pl-5 " type='text' />
                   <p className='absolute right-14 pt-2 font-extralight tracking-wider leading-6 cursor-pointer'> <BsSearch size={25 }/></p>  
                  </div>
              </div>
              <hr className='border-1 mt-7'/>
        
              
              <div className='mt-20'>
                  <h2 className='leading-6	 text-center text-[30px] font-extralight tracking-wider	'>TRẢI NGHIỆM MUA SẮM TẠI SHOWROOM</h2>
                  <p className='leading-6 font-extralight tracking-wider pt-5 text-center'>Mua sắm trực tiếp tại hệ thống showroom để có những trải nghiệm dịch vụ tốt nhất.</p>
            
                  <div className='flex gap-9 mt-5'>
                       <div className='relative'>
                          <img src={Banner2} />
                          <div style={{backgroundColor:'rgba(255,255,255, 0.8)'}} className='absolute bottom-0 w-full h-[30px]'>
                              <p className='pl-10 font-extralight tracking-wider leading-6 cursor-pointer'>KHÔNG GIAN THỜI TRANG VÀ HIỆN ĐẠI</p>
                          </div>
                      </div>
                     <div className='relative'>
                          <img src={Banner3} />
                          <div style={{backgroundColor:'rgba(255,255,255, 0.8)'}} className='absolute bottom-0 w-full h-[30px]'>
                              <p className='pl-10 font-extralight tracking-wider leading-6 cursor-pointer'>MUA SẮM THOẢI MÁI VÀ TIỆN LỢI</p>
                          </div>
                      </div>
                <div className='relative'>
                          <img src={Banner4} />
                          <div style={{backgroundColor:'rgba(255,255,255, 0.8)'}} className='absolute bottom-0 w-full h-[30px]'>
                              <p className='pl-10 font-extralight tracking-wider leading-6 cursor-pointer'>ĐÓN TIẾP ÂN CẦN, TƯ VẤN CHUYÊN NGHIỆP</p>
                          </div>
                      </div>
            </div>
              </div>


          </div>
          <Footer/>
    </div>
  )
}

export default ShowRom