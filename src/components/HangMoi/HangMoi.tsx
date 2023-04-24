import React from 'react'
import { Outlet } from 'react-router-dom'
import Img0 from "../../assets/image/hang-moi/img-0.webp"
import Img2 from "../../assets/image/hang-moi/img-2.webp"
import Img3 from "../../assets/image/hang-moi/img-3.webp"
import Img4 from "../../assets/image/hang-moi/img-4.webp"

import Img1 from "../../assets/image/hang-moi/img-1.webp"

const HangMoi = () => {
  return (
      <div className='container mx-auto'>
          <h1 className="text-center text-[20px] font-bold mb-2">HÀNG MỚI VỀ</h1>
          <p className='text-center text-[17px] text-slate-500'>Các sản phẩm bắt nhịp quốc tế, nàng thời thượng không nên bỏ lỡ</p>
    
          <div className="flex gap-3 mt-10">
              
              <div className=''>
                  <img className='mb-3' src={Img0} />
                  <p className='text-center text-[15px] text-slate-500'>Chân váy mini vạt đắp</p>
                    <span className='text-center block text-[##252a2b] font-bold'>459,000</span>
              </div>

              {/*  */}
                 <div>
                  <img className='mb-3' src={Img2} />
                  <p className='text-center text-[15px] text-slate-500'>Chân váy mini vạt đắp</p>
                    <span className='text-center block text-[##252a2b] font-bold'>459,000</span>
              </div>
              {/*  */}
                 <div>
                  <img className='mb-3' src={Img3} />
                  <p className='text-center text-[15px] text-slate-500'>Chân váy mini vạt đắp</p>
                    <span className='text-center block text-[##252a2b] font-bold'>459,000</span>
              </div>
              {/*  */}

                 <div>
                  <img className='mb-3' src={Img4} />
                  <p className='text-center text-[15px] text-slate-500'>Chân váy mini vạt đắp</p>
                    <span className='text-center block text-[##252a2b] font-bold'>459,000</span>
              </div>
            
          </div>
      
      </div>
  )
}

export default HangMoi