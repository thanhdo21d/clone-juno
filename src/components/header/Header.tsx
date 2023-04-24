import React, { useState } from 'react'
import Logo from "../../assets/image/logo-svg.svg"
import Banner from '../banner/Banner'
import { Outlet } from 'react-router-dom'

import styled from 'styled-components'
const Header = () => {
     const [showSearch, SetShowSearch] = useState(false);
    const [inputHover, SetInputHover] = useState(false);
  return (
      <Container className='mx-auto'>
          <div className="justify-around items-center flex h-[70px]">
              
             <div>
              <img className='w-[90px] h-[90px] cursor-pointer	' src={Logo } />
          </div>
          {/*  */}

          <div>
              <ul className="flex gap-7 ">
                  <li className='text-text-slate-600 text-sm hover:opacity-60 cursor-pointer'>HÀNG MỚI</li>
                  <li className='text-text-slate-600 text-sm hover:opacity-60 cursor-pointer'>SẢN PHẨM</li>
                  <li className='text-text-slate-600 text-sm hover:opacity-60 cursor-pointer'>BST TAKE ME TO SUMMER</li>
                  <li className='text-[#f40000] text-sm hover:opacity-60 cursor-pointer'>SALE</li>
                  <li className='text-[#f40000] text-sm hover:opacity-60 cursor-pointer'>SALE QUẦN ÁO ĐẾN 50%</li>
                  <li className=' text-slate-600 text-sm hover:opacity-60 cursor-pointer'>SHOWROOM</li>
              </ul>
          </div>

              <div className='flex gap-8'>
                  {/*  */}
                    <div className={`search ${showSearch ? "show-search" : " "}`}>
                        <button onFocus={() => SetShowSearch(true)} onBlur={() => {
                            if (!inputHover) SetShowSearch(false);
                        }}>
                          {/*  */}
                             <i className="fa fa-search"></i>
                          
                        </button>
                        <input className='w-[80px]' type="text" placeholder='Search'
                            onMouseEnter={() => { SetInputHover(true) }}
                            onMouseLeave={() => SetInputHover(true)}
                            onBlur={() => {
                                SetShowSearch(false)
                                SetInputHover(false)
                            }}
                        />

                  </div>
                  <div className='flex gap-4 mt-2'>
                  <i className="fa fa-user cursor-pointer"></i>
                  <i className="fa fa-shopping-cart cursor-pointer"></i>
              </div>
              </div>
             

          </div>
          <Outlet />
          
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
                    color: black;
                        &:focus{
                            outline: none;
                        }
                }
            }
            .show-search{
                border:1px solid white;
                background-color:rgba(0,0,0,0.06);
                input{
                    width: 50%;
                    opacity: 1;
                    visibility: visible;
                    padding: 0.3rem;
                }
            }
`