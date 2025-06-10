import React from 'react'
import { products } from '@/db/data'

const Product = async({params}:{params:{product:string}}) => {
    const {product} = await params
 
    const findProduct = products.find(p=>p.id=== +product);

  return (
   
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
    <div className='bg-white p-8 rounded-lg shadow-lg text-center relative'>
       
    <h1 className='text-3xl mb-[1rem]'>{findProduct?.name}</h1>
    <img src={findProduct?.image} alt={findProduct?.name}  className='w-[40rem] rounded-lg mx-auto'/>
    <p className='text-2xl mt-[1rem]'> {findProduct?.price}</p>
    </div>
</div>
  )
}

export default Product