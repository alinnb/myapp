import { sleep } from '@/app/utils'
import React from 'react'

export default async function Page() {
    await sleep(3000)
    return (
        <div>体育:{new Date().toLocaleString()}</div>
    )
}
