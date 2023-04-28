import React, { useState } from 'react';
import Img0 from "../../assets/image/hang-moi/img-0.webp";
import Img2 from "../../assets/image/hang-moi/img-2.webp";
import Img3 from "../../assets/image/hang-moi/img-3.webp";
import Img4 from "../../assets/image/hang-moi/img-4.webp";
import Img5 from "../../assets/image/hang-moi/img-5.webp";
import Img6 from "../../assets/image/hang-moi/img-6.webp";
import Img7 from "../../assets/image/hang-moi/img-7.webp";
import Img1 from "../../assets/image/hang-moi/img-1.webp";
import SanPhamQuanTam from './SanPhamQuanTam';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';
import HangNew from './HangNew';
const HangMoi = () => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleImageHover = (imgSrc:any) => {
    setHoveredImg(imgSrc);
  };

    return (
      <div>
            
     
    <div className='container justify-center mx-auto'>
      <motion.h1 variants={fadeIn('up', 0.75)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="text-center text-[20px]  mb-2 mt-14 font-extralight">HÀNG MỚI VỀ</motion.h1>
      <motion.p variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='text-center text-[17px] text-slate-500 font-extralight'>Các sản phẩm bắt nhịp quốc tế, nàng thời thượng không nên bỏ lỡ</motion.p>
     <HangNew/>
          <div className='w-[100px] block text-center mx-auto'>
              <h3 className='inline-block cursor-pointer mt-14 font-extralight'>XEM TẤT CẢ</h3>
          <hr className='bg-black border-2 '/>
          </div>
          
            </div>
            <SanPhamQuanTam/>
             </div>
  );
};

export default HangMoi;
