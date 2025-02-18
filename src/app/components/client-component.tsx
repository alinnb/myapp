'use client'
import React, { useState } from 'react'

export default function ClientComponent({
    children,
}:{
    children: React.ReactNode
}) {
    const [data, setData] = useState(0)
    return (
        <div>
            <button onClick={() => setData(data + 1)}>
                请点我：{data}
            </button>
            {children}
        </div>
    )
}
