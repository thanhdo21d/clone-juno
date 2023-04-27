import React,{useEffect, useState} from 'react'
import { getAlll } from '../../api/product';
import axios from 'axios';
const Sale = () => {
    // const [product, setProduct] = useState<>([])
    // const getItem = async () => {
    //     const {data}  = await axios.get("http://localhost:8080/api/products") 
    //     setProduct(data)
    //     console.log("data",data)
    // }
    // useEffect(() => {
    //     getItem()
    // },[])
  return (
      <div>
          {/* {product.map((item, index) => {
             return <div key={index}> {item.id}</div>
         })} */}
    </div>
  )
}

export default Sale