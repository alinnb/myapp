import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Blossoming Into New Beginnings',
}

export default function Page() {
  return (
    <Hero 
      image="/R0003009.jpg"
      title="Blossoming Into New Beginnings"
    />
  )
}
