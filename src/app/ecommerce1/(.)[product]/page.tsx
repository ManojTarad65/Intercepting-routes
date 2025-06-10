
import React from 'react'
import { X } from 'lucide-react'
import { products } from '@/db/data'

const InterceptedProduct = ({params}:{params:{product:string}}) => {
    const {product} = params
    const findProduct = products.find(p=>p.id=== +product);
    return (

        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-20'>
            <div className='bg-white p-8 rounded-lg shadow-lg text-center relative'>
                <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
                    <X size={24}/>
                </button>
            <h1 className='text-3xl mb-[1rem]'>{findProduct?.name}</h1>
            <img src={findProduct?.image} alt={findProduct?.name}  className='w-[40rem] rounded-lg mx-auto'/>
            <p className='text-2xl mt-[1rem]'> {findProduct?.price}</p>
            </div>
        </div>
    )
  
    
   




}

export default InterceptedProduct