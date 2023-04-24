import React from 'react'
import Banner1 from "../../assets/image/banner-1.webp"
import Banner2 from "../../assets/image/banner-2.webp"

const Banner = () => {
  return (
      <div>
          <img className='w-full h-screen' src={Banner1} />
          <img src={Banner2 } />
          
    </div>
  )
}

export default Banner