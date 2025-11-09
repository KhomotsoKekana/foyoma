import React from 'react'
import Image from 'next/image';

export default function Post() {
  return (
    <div>
      <PostHeader />
    </div>
  )
}

export function PostHeader() {
    return (
        <div>
            <Image 
            src="/assets/hacker.png" 
            width={44}
            height={44}
            alt="profile pic"
            className='flex p-3 space-x-5'
            />
            <div>
                <span>Guest</span>
                <span>@Guest1234</span>
                <span>a day ago</span>
            </div>
        </div>
    );
}
