import React, { useState } from 'react'
import Logo from "../../assets/image/logo-svg.svg"
import Banner from '../banner/Banner'
import styled from 'styled-components'
const Header = () => {
     const [showSearch, SetShowSearch] = useState(false);
    const [inputHover, SetInputHover] = useState(false);
  return (
      <Container className='container mx-auto h-[100px] '>
          <div className="justify-around items-center flex">
              
             <div>
              <img className='w-[90px] h-[90px] ' src={Logo } />
          </div>
          {/*  */}

          <div>
              <ul className="flex gap-7 ">
                  <li className='text-[##000000] text-sm hover:opacity-60'>HÀNG MỚI</li>
                  <li className='text-[##000000] text-sm hover:opacity-60'>SẢN PHẨM</li>
                  <li className='text-[##000000] text-sm hover:opacity-60'>BST TAKE ME TO SUMMER</li>
                  <li className='text-[#f40000] text-sm hover:opacity-60'>SALE</li>
                  <li className='text-[#f40000] text-sm hover:opacity-60'>SALE QUẦN ÁO ĐẾN 50%</li>
                  <li className='text-[##000000] text-sm hover:opacity-60'>SHOWROOM</li>
              </ul>
          </div>

              <div>
                  {/*  */}
                    <div className={`search ${showSearch ? "show-search" : " "}`}>
                        <button onFocus={() => SetShowSearch(true)} onBlur={() => {
                            if (!inputHover) SetShowSearch(false);
                        }}>
                          {/*  */}
                             <i className="fa fa-search"></i>
                          
                        </button>
                        <input type="text" placeholder='Search'
                            onMouseEnter={() => { SetInputHover(true) }}
                            onMouseLeave={() => SetInputHover(true)}
                            onBlur={() => {
                                SetShowSearch(false)
                                SetInputHover(false)
                            }}
                        />

                  </div>
                  {/*  */}
                  {/* <input className='w-[80px]' type="search" placeholder='tim kiem'
                    onMouseEnter={() => { SetInputHover(true) }}
                            onMouseLeave={() => SetInputHover(true)}
                            onBlur={() => {
                                SetShowSearch(false)
                                SetInputHover(false)
                            }}
                  /> 
                  <i className="fa fa-search"></i> */}
              </div>
              <div className='flex gap-4'>
                  <i className="fa fa-user"></i>
                  <i className="fa fa-shopping-cart"></i>
              </div>

          </div>
         <Banner/>
    </Container>
  )
}

export default Header

const Container = styled.div`
    
            .search{
                display: flex;
                gap:0.4rem;
                align-items: center;
                justify-content: center;
                padding: 0.2rem;
                padding-left:0.5rem;
                button{
                    background-color: transparent;
                    svg{
                        color:white;
                    }
                }
                input{
                    width: 0;
                    opacity:0;
                    visibility: hidden;
                    transition: 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    color: white;
                        &:focus{
                            outline: none;
                        }
                }
            }
            .show-search{
                border:1px solid white;
                background-color:rgba(0,0,0,0.06);
                input{
                    width: 100%;
                    opacity: 1;
                    visibility: visible;
                    padding: 0.3rem;
                }
            }
`