import { sleep } from '@/app/utils'
import React from 'react'

// 强制动态编译
export const dynamic = 'force-dynamic';

export default async function Page() {
    await sleep(3000)
    return (
        <div>新闻:{new Date().toLocaleString()}</div> 
    )
}
