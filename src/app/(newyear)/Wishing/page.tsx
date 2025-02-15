import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Spring Brings Fortune And Joy',
}

export default function Page() {
  return (
    <Hero 
      image="/R0002998.jpg"
      title="Spring Brings Fortune And Joy"
    />
  )
}
