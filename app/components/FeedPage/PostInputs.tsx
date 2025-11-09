import React from 'react'
import Image from 'next/image'
import { CalendarDateRangeIcon, ChartBarIcon, FaceFrownIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'

export default function PostInputs() {
  return (
    <div className='flex space-x-4 p-3'>
      <div className='w-10 h-10 rounded-full overflow-hidden border border-gray-300 cursor-pointer'>
        <Image 
          src="/assets/hacker.png" 
          width={40}
          height={40}
          alt="avatar"
          className='object-cover w-full h-full'
        />
      </div>
      <div className='w-full'>
        <textarea 
         placeholder="What's happening?"
         className='resize-none w-full min-h-[60] text-lg border-b border-gray-200 mb-3'
        />
        <div className='flex justify-between'>
            <div className='flex space-x-1.5'>
                <PhotoIcon className='w-[22] h-[22] text-[#8eb69b]' />
                <ChartBarIcon className='w-[22] h-[22] text-[#8eb69b]' />
                <FaceFrownIcon className='w-[22] h-[22] text-[#8eb69b]' />
                <CalendarDateRangeIcon className='w-[22] h-[22] text-[#8eb69b]' />
                <MapPinIcon className='w-[22] h-[22] text-[#8eb69b]' />

            </div>
            <button className='bg-[#8eb69b] text-white px-4 py-2 w-[80] h-[40] cursor-pointer
            rounded-full font-bold hover:bg-[#7aa68a]'>Post</button>

        </div>
      </div>
    </div>
  )
}
