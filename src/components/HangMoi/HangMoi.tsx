import React, { useState } from 'react';
import Img0 from "../../assets/image/hang-moi/img-0.webp";
import Img2 from "../../assets/image/hang-moi/img-2.webp";
import Img3 from "../../assets/image/hang-moi/img-3.webp";
import Img4 from "../../assets/image/hang-moi/img-4.webp";
import Img5 from "../../assets/image/hang-moi/img-5.webp";
import Img6 from "../../assets/image/hang-moi/img-6.webp";
import Img7 from "../../assets/image/hang-moi/img-7.webp";
import Img1 from "../../assets/image/hang-moi/img-1.webp";

const HangMoi = () => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleImageHover = (imgSrc:any) => {
    setHoveredImg(imgSrc);
  };

  return (
    <div className='container mx-auto'>
      <h1 className="text-center text-[20px] font-bold mb-2 mt-14 font-extralight">HÀNG MỚI VỀ</h1>
      <p className='text-center text-[17px] text-slate-500 font-extralight'>Các sản phẩm bắt nhịp quốc tế, nàng thời thượng không nên bỏ lỡ</p>
      <div className="flex gap-3 mt-10">
              <div className=''>
          <img className='mb-3 transition-all  h-[400px] w-[480px] ease-in-out rounded-lg ' src={hoveredImg === Img0 ? Img1 : Img0} onMouseEnter={() => handleImageHover(Img0)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Chân váy mini vạt đắp</p>
          <span className='text-center block text-[##252a2b]  font-bold'>459,000</span>
              </div>
              {/*  */}
        <div className="">
          <img className='mb-3 h-[400px] w-[480px]  transition-all ease-in-out rounded-lg ' src={hoveredImg === Img2 ? Img5 : Img2} onMouseEnter={() => handleImageHover(Img2)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Áo thun trắng cổ tim</p>
          <span className='text-center block text-[##252a2b]  font-bold'>299,000</span>
        </div>
              {/**/}

             <div className=''>
          <img className='mb-3 transition-all  h-[400px] w-[480px] ease-in-out rounded-lg ' src={hoveredImg === Img3 ? Img6 : Img3} onMouseEnter={() => handleImageHover(Img3)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Áo thun trắng cổ tim</p>
          <span className='text-center block text-[##252a2b]  font-bold'>299,000</span>
              </div>
              {/*  */}
             <div className=''>
          <img className='mb-3 transition-all  h-[400px] w-[480px] ease-in-out rounded-lg ' src={hoveredImg === Img4 ? Img7 : Img4} onMouseEnter={() => handleImageHover(Img4)} onMouseLeave={() => handleImageHover(null)} />
          <p className='text-center text-[15px] text-slate-500 font-extralight'>Áo thun trắng cổ tim</p>
          <span className='text-center block text-[##252a2b] font-bold mt-2'>299,000</span>
        </div>
          </div>
          <h3 className='text-center cursor-pointer mt-20 font-extralight'>XEM TẤT CẢ</h3>
          <hr className='bg-black border-2 '/>
    </div>
  );
};

export default HangMoi;
