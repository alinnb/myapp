import Image from 'next/image'
import React from 'react'

interface HeroProps {
    image: string,
    title: string
}

export default function Hero(HeroProps: HeroProps) {
  return (
    <div className='relative h-screen'>
        <div className='absolute inset-0 -z-10'>
            <Image src={HeroProps.image} alt="hero" fill style={{ objectFit:"cover"}}/>
            <div className='absolute inset-0 bg-gradient-to-b from-gray-900'/>
        </div>
        <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='text-6xl text-white'>{HeroProps.title}</h1>
        </div>
    </div>
  )
}
