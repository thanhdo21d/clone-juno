import React from 'react'
import Img1 from "../assets/image/chitiet/img-3.webp"
import Img2 from "../assets/image/chitiet/img-4.webp"
import Img3 from "../assets/image/chitiet/img-5.webp"
import Img4 from "../assets/image/chitiet/img-6.webp"

import Img5 from "../assets/image/chitiet/img-7.webp"
import Img6 from "../assets/image/chitiet/img-8.webp"
import Img7 from "../assets/image/chitiet/img-9.webp"
import Img8 from "../assets/image/chitiet/img-10.webp"
import { FaMapMarkerAlt } from "react-icons/fa"
import {AiFillPlusCircle} from "react-icons/ai"
import HangNew from '../components/HangMoi/HangNew'
import Footer from '../components/footer/Footer'

const ChiTietSp = () => {
    return (
      <div>
            <div className='flex gap-8 ml-2 '>
          <div className='w-[822px]'>
              <div className='flex gap-5'>
                <img className='w-[410px]' src={Img1} />
              <img  className='w-[410px]' src={ Img2} />
              </div>
              <div className='flex gap-5 mt-2'>
                   <img className='w-[410px]' src={Img3} />
              <img  className='w-[410px]' src={ Img4} />
              </div>
              <div className='flex gap-5 mt-2'>
                      <img className='w-[200px]' src={Img5} />
                  <img className='w-[193px]' src={Img6} />
                      <img className='w-[193px]' src={Img7} />
              <img  className='w-[193px]' src={ Img8} />
            </div>
          </div>
          {/*  */}
              <div>
                    <div>
            <p className=" w-[100px] h-[40px] border-2 mt-3 pl-3  pt-1 cursor-pointer font-extralight">Hàng Mới</p>
              <h1 className='text-[20px] mt-5 font-bold font-extralight'> Túi Xách Nhỏ Heart In Heart Túi Xách Nhỏ Heart In Heart</h1>
              <p className='mt-2 text-xl font-extralight'>595,000 <span className='text-2xl text-red-500'>$</span></p>
          
         <div className='flex gap-5 mt-5'>
                      <p className='w-[40px] h-[40px] rounded-full bg-pink-700 border-2'></p>
                      <p className='w-[40px] h-[40px] rounded-full bg-orange-500 border-2'></p>
                  <p className='w-[40px] h-[40px] rounded-full bg-slate-700 border-2'></p>
              </div>
          
              <button className='w-full bg-black h-[44px] mt-5 text-white'>MUA NGAY</button>
              <div className='relative'>
              <button className='w-full bg-white h-[44px] mt-5  text-black border border-black'> TÌM SẢN PHẨM TẠI SHOWROOM</button>
        <p className='absolute top-8 left-20'><FaMapMarkerAlt size={20} /> </p>
                  
              </div>

              </div>
              
              <div className='mt-5'>
                  <p className='font-extralight'><span className='font-bold text-black'>Đăng nhập</span> để tích điểm và hưởng quyền lợi thành viên từ JUNO</p>
                  <p className='mt-5 font-extralight'>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</p>
                  <span className='font-extralight'> (Cho hoá đơn từ 300.000đ)</span>

                  <p className='mt-5 font-extralight'>ĐỔI TRẢ DỄ DÀNG</p>
                  <span className='font-extralight'> (Đổi trả 30 ngày cho Giày và Túi; 7 ngày cho Phụ kiện nếu lỗi nhà sản xuất)</span>

                  <p className='mt-5 font-extralight'>TỔNG ĐÀI BÁN HÀNG 1800 1162</p>
                  <span className='font-extralight'> (Miễn phí từ 8h00 - 21:00 mỗi ngày)</span>
           
                  <div className='flex gap-8 mt-10'>
                      <div className=''>
                          <h3> MÔ TẢ SẢN PHẨM </h3>
                          <div className='flex gap-2 mt-5'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='font-extralight'> Mã sản phẩm: TXN669</p>
                              
                         </div>
                                                     <div className='flex gap-2'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='pt-2 font-extralight'> Kiểu dáng: Túi xách thời trang</p>
                              
                         </div>                          <div className='flex gap-2'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='pt-2 font-extralight'> Chất liệu: Si mờ trơn</p>
                              
                         </div>                          <div className='flex gap-2'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='pt-2 font-extralight'>Màu sắc: Kem-Hồng Đỏ-Đen</p>
                              
                         </div>                          <div className='flex gap-2'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='pt-2 font-extralight'> Kích cỡ: 18cmx19cmx8cm</p>
                              
                         </div>                          <div className='flex gap-2'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='pt-2 font-extralight'> Xuất xứ: Trung Quốc</p>
                              
                          </div>
                         <div className='flex gap-2'>
                          <p className='pt-1'><AiFillPlusCircle /></p><p className='pt-2 font-extralight'> Giá đã bao gồm VAT</p>
                              
                          </div>

                      </div>
                      {/*  */}
                      <div>
                          <h4> CHI TIẾT </h4>
                          <img className='w-[200px] h-2/3 mt-5' src={Img7 } />
                      </div>
           </div>
              </div>

          </div>
          
            </div>
        <div className='container mx-auto'>
                    <hr className='mt-20 border' />
            <h5 className='mt-5 text-center text-[24px] font-medium '>Có thể nàng sẽ thích</h5>
                <HangNew />
                <Footer/>
            </div>
         
      </div>
      
  )
}

export default ChiTietSp