import React from 'react'

const HangMoiMeNu = () => {
  return (
      <div className='container mx-auto'>
          <h1 className='text-center text-[24px] text-slate-500'>Top Sản Phẩm Mới Nhất</h1>
          <p className='text-center leading-8 tracking-wider font-extralight mt-2'>(110 sản phẩm)</p>
          <div className='justify-end flex'>
              <p className='mr-20 leading-8 tracking-wider font-extralight'>Bộ lọc <i className="fa fa-chevron-down"></i></p>
              <p className='leading-8 tracking-wider font-extralight'>Sắp xếp theo: <select>
                  <option>Tăng dần</option>
                  <option>Giảm dần</option>
                  <option>Mới Nhất</option>
                  <option>Bán Chạy Nhất</option>

              
              </select></p>
          </div>
    </div>
  )
}

export default HangMoiMeNu