import React, { useState } from 'react'
import Logo from "../../assets/image/logo-svg.svg"
import { Outlet, useNavigate } from 'react-router-dom'

import styled from 'styled-components'
const Header = () => {
const navigate = useNavigate()

     const [showSearch, SetShowSearch] = useState(false);
    const [inputHover, SetInputHover] = useState(false);
    const [showCart,setShowCart] = useState(false);
  return (
      <Container className='mx-auto'>
          <div className="justify-around items-center flex h-[70px]">
              
             <div>
              <img onClick={()=> navigate("/")} className='w-[90px] h-[90px] cursor-pointer	' src={Logo } />
          </div>
          {/*  */}

          <div>
              <ul className="flex gap-7 ">
                  <li onClick={()=>{navigate("/hangmoimenu")} } className='text-sm text-gray-950 hover:opacity-60 cursor-pointer font-extralight'>HÀNG MỚI</li>
                  <li className='text-slate-600 text-sm hover:opacity-60 cursor-pointer font-extralight'>SẢN PHẨM</li>
                  <li onClick={()=>{navigate("/taketosumber")} } className='text-slate-600 text-sm hover:opacity-60 cursor-pointer font-extralight'>TAKE ME TO SUMMER</li>
                  <li className='text-[#f40000] text-sm hover:opacity-60 cursor-pointer font-extralight'>SALE</li>
                  <li className='text-[#f40000] text-sm hover:opacity-60 cursor-pointer font-extralight'>SALE QUẦN ÁO ĐẾN 50%</li>
                  <li onClick={()=>{navigate("/showrom")} } className=' text-slate-600 text-sm hover:opacity-60 cursor-pointer font-extralight'>SHOWROOM</li>
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
                  <i  className="fa fa-user cursor-pointer"></i>
                  <i onClick={()=>{setShowCart(!showCart)}} className="fa fa-shopping-cart cursor-pointer"></i>
                      {showCart && (
                          <div  className='cart-item'>
                            
                              <div>
                                  <h1>GIỎ HÀNG</h1>
                                  <p>Bạn đang có 0 sản phẩm trong giỏ hàng.</p>
                                  <hr/>
                            </div>
                        
                         </div>
             )}
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
            .cart-item{
                width:100%;
                height: 100%;
                background-color:rgba(0,0,0,0.06);
                position: fixed;
                margin-top: 20px;
            }
`