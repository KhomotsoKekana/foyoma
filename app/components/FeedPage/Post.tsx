import React from 'react'
import Image from 'next/image';
import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Post() {
  return (
    <div>
      <PostHeader />

      <div className='ml-16 p-3 flex space-x-14'>
        <div className='relative'>
          <ChatBubbleOvalLeftEllipsisIcon 
          className='w-[22] h-[22] cursor-pointer
          hover:text-[#8eb69b] transition
          '/>
          <span className='absolute text-xs top-1 -right-3'>2</span>
        </div>

        <div className='relative'>
          <HeartIcon 
          className='w-[22] h-[22] cursor-pointer
          hover:text-red-500 transition-colors duration-200
          '/>
          <span className='absolute text-xs top-1 -right-3'>2</span>
        </div> 

        <div className='relative'>
          <ChartBarIcon
          className='w-[22] h-[22] cursor-pointer
          hover:text-blue-500 transition-colors duration-200
          '/>
          <span className='absolute text-xs top-1 -right-3'>2</span>
        </div>

        <div className='relative'>
          <ArrowUpTrayIcon 
          className='w-[22] h-[22] cursor-pointer
          hover:text-gray-500 transition-colors duration-200
          '/>
          <span className='absolute text-xs top-1 -right-3'>2</span>
        </div>       
      </div>
    </div>
  )
}

export function PostHeader() {
    return (
        <div className='flex p-3 space-x-5'>
            <Image 
            src="/assets/user.png" 
            width={44}
            height={44}
            alt="profile pic"
            className='w-10 h-10 cursor-pointer'
            />

            <div className='text-[15px] flex flex-col space-y-1.5'>
              <div className='flex space-x-1.5 text-[15px] text-[#707E89]'>
                <span className='inline-block font-bold text-[#0f1419] whitespace-nowrap
                overflow-hidden text-ellipsis 
                max-w-[60px] min-[400px]:max-w-[100-px] min-[500px]:max-w-[140px] 
                sm:max-w-[160px]: 
                '>Guesttestingoutthething</span>
                <span className='inline-block whitespace-nowrap overflow-hidden text-ellipsis
                max-w-[60px] min-[400px]:max-w-[100-px] min-[500px]:max-w-[140px] 
                sm:max-w-[160px]: '>@Guest123456789</span>
                <span>*</span>
                <span>a day ago</span>
              </div>

            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis sint natus recusandae omnis. Obcaecati quasi quae molestiae in explicabo dolorum quaerat, qui natus, provident architecto veritatis laborum itaque hic.</span>
            </div>

        </div>
    );
}
