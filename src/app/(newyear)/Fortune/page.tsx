import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Prosperity',
}

export default function Page() {
  return (
    <Hero 
      image="/R0003001.jpg"
      title="Prosperity Blooms Like Flowers"
    />
  )
}
