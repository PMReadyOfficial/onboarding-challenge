import React from 'react'

export default function Qr() {
  return (
    <div className="bg-slate-400 flex items-center h-screen">
        <div className='w-[400px] h-fit mx-auto my-auto bg-white p-5'>
            <div>
            <img src="./image-qr-code.png" alt="" /> 
            </div>
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-center text-2xl font-bold text-gray-700'>Improve your front-end skills by building projects</h1>
                <p className='text-center text-lg mt-2 text-gray-500'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>
    
  )
}
