import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';
import Img0 from "../../assets/image/hang-moi/img-0.webp";
import Img2 from "../../assets/image/hang-moi/img-2.webp";
import Img3 from "../../assets/image/hang-moi/img-3.webp";
import Img4 from "../../assets/image/hang-moi/img-4.webp";
import Img5 from "../../assets/image/hang-moi/img-5.webp";
import Img6 from "../../assets/image/hang-moi/img-6.webp";
import Img7 from "../../assets/image/hang-moi/img-7.webp";
import Img1 from "../../assets/image/hang-moi/img-1.webp";
import SanPhamQuanTam from './SanPhamQuanTam';
const HangNew = () => {
    const [hoveredImg, setHoveredImg] = useState(null);

  const handleImageHover = (imgSrc:any) => {
    setHoveredImg(imgSrc);
  };

  return (
      <div>
           <div className="flex gap-3 mt-10">
              <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
          <img className='mb-3 transition-all  h-[360px] w-[480px] ease-in-out rounded-lg cursor-pointer ' src={hoveredImg === Img0 ? Img1 : Img0} onMouseEnter={() => handleImageHover(Img0)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Chân váy mini vạt đắp</p>
          <span className='text-center block text-[##252a2b]  font-bold'>459,000</span>
              </motion.div>
              {/*  */}
        <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="">
          <img className='mb-3 h-[360px] w-[480px]  transition-all ease-in-out rounded-lg cursor-pointer ' src={hoveredImg === Img2 ? Img5 : Img2} onMouseEnter={() => handleImageHover(Img2)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Áo thun trắng cổ tim</p>
          <span className='text-center block text-[##252a2b]  font-bold'>299,000</span>
        </motion.div>
            {/**/}

             <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
          <img className='mb-3 transition-all  h-[360px] w-[480px] ease-in-out rounded-lg cursor-pointer ' src={hoveredImg === Img3 ? Img6 : Img3} onMouseEnter={() => handleImageHover(Img3)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Áo thun trắng cổ tim</p>
          <span className='text-center block text-[##252a2b]  font-bold'>299,000</span>
              </motion.div>
              {/*  */}
             <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
          <img className='mb-3 transition-all  h-[360px] w-[480px] ease-in-out rounded-lg cursor-pointer ' src={hoveredImg === Img4 ? Img7 : Img4} onMouseEnter={() => handleImageHover(Img4)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Áo thun trắng cổ tim</p>
          <span className='text-center block text-[##252a2b] font-bold mt-2'>299,000</span>
        </motion.div>
          </div>
    </div>
  )
}

export default HangNew