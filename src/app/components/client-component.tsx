'use client'
import React, { useState } from 'react'
import ServerComponent from './server-component'

export default function ClientComponent() {
    const [data, setData] = useState(0)
    return (
        <div>
            <button onClick={() => setData(data + 1)}>
                请点我：{data}
            </button>
            <ServerComponent/>
        </div>
    )
}
