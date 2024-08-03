import Image from 'next/image'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const Avatar = ({src}) => {
    if(src){
        return <Image src={src} alt='avatar' width={30} height={30} className='object-contain rounded-full'/>
    }
  return (
    <div>
      <FaUserCircle size={30}/>
    </div>
  )
}

export default Avatar
