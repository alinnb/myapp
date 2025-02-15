'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    const links = [
        {
            href: '/Fortune',
            label: 'Fortune'
        },
        {
            href: '/Wishing',
            label: 'Wishing'
        },
        {
            href: '/Blossoming',
            label: 'Blossoming'
        }
    ]

    return (
        <div className="absolute w-full z-50">
            <div className="flex justify-between container mx-auto text-white p-8 ">
                <Link className="text-3xl font-bold" href="/">Home</Link>

                <div className="text-xl space-x-2">
                    {links.map((link, index) => {
                        return (
                            <Link className="hover:text-gray-300" key={index} href={link.href}>{link.label}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header