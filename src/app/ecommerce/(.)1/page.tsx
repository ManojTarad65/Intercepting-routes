"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';


const InterceptedProductOne = () => {

    const router = useRouter()
    const handleClick = () => {
        router.push("/ecommerce")
    }



  return (
    <>
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-8 rounded-lg shadow-lg text-center relative'>
            <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'
                onClick={handleClick}
            >
           <X size={24} />
            </button>
            <h1 className='text-3xl mb-4'>Mackbook pro</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpt7gAUhLdgI9QgYI5UjZliRbKMBHhHuM7A&s" alt="macbook pro pictures" 
            className='w-[40rem] mx-auto rounded-lg'
            />

            <p className="text-3xl text-red-500">Price : 1000k</p>
        </div>
    </div>
    </>
)}

export default  InterceptedProductOne