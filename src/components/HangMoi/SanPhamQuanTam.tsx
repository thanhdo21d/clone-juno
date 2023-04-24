import React from 'react'
import Img1 from "../../assets/image/ban-chay/img-1.jpeg"
import Img2 from "../../assets/image/ban-chay/img-2.webp"
import Img3 from "../../assets/image/ban-chay/img-3.webp"
import BoSuuTap from './BoSuuTap'

const SanPhamQuanTam = () => {
  return (
      <div className='container mx-auto mt-24'>
          <hr className='bg-black border' />
          <h1 className='text-[20px] font-bold mt-20 text-center'>NHÓM SẢN PHẨM ĐƯỢC QUAN TÂM NHẤT</h1>

          <div className='flex gap-10 mt-8'>
              <div>
                  <img className="cursor-pointer" src={Img1} />
                  <p className='text-center mt-5 text-[#252a2b] leading-3	cursor-pointer'> GIÀY SANDAL</p>
              </div>
              {/*  */}
               <div>
                  <img className="cursor-pointer" src={Img2} />
                  <p className='text-center mt-5 text-[#252a2b] leading-3	cursor-pointer'>TÚI XÁCH NHỎ</p>
              </div>
              {/*  */}
               <div>
                  <img className="cursor-pointer" src={Img3} />
                  <p className='text-center mt-5 text-[#252a2b] leading-3	cursor-pointer'>QUẦN ÁO THỜI TRANG</p>
              </div>
          </div>
          <hr className='mt-12 border-1' />
          <BoSuuTap/>
    </div>
  )
}

export default SanPhamQuanTam