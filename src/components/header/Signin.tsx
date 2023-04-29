import React from 'react'
import ReactDOM from 'react-dom'
const Signin = ({ open = false, handelClose = () =>{}}) => {
    if(typeof document === 'undefined') return <div className='model'></div>
    return ReactDOM.createPortal(
        <div className='model'>
            <div    className={`fixed inset-0 z-50 flex items-center justify-center p-5 ${open ? '' : "opacity-0 invisible"}`}>

                <div  className='absolute inset-0 justify-center bg-black bg-opacity-25'>
                    <div  style={{background:'rgba(255,255,255, 0.8)'}} className=' w-[500px] rounded-xl mx-auto mt-32'>
                    
                     
                        <form className='relative'>
                            <h1 className='pt-2 text-3xl font-bold text-center'>Login</h1>
                                    <div className="">
                                        <label htmlFor="email" className="block mb-2 ml-12 text-sm font-medium text-black text-gray-900">Your email</label>
                                        <input style={{background:'rgba(0,0,0,0.4) '}} type="email" id="email" className="w-[400px] ml-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="password" className="block mt-2 mb-2 ml-12 text-sm font-medium text-black text-gray-900">Your password</label>
                                        <input style={{background:'rgba(0,0,0,0.4) '}}  type="password" id="password" className="w-[400px] ml-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox"  className="w-4 h-4 ml-12 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-black text-gray-900">Remember me</label>
                                    </div>
                                    <button type="submit" className="ml-12 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                <span onClick={handelClose} className='absolute cursor-pointer top-2 right-3'> <span className='pr-2 text-2xl text-red-500'> X</span>Close</span>
                        </form>
                     </div> 

          
            </div>


            </div>
        </div>,
        document.querySelector<any>("body"))
  
}

export default Signin