import React from 'react'

const fetchImg = async () => {
    const res = await fetch('http://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    return data
}

export default async function Page() {
    const obj1 = await fetchImg()
    const obj2 = await fetchImg()
    const obj3 = await fetchImg()
    console.log('😀')
    return (
        <div className='flex'>
            <img src={obj1.message} width={200} alt="Random dog 1"/>
            <img src={obj2.message} width={200} alt="Random dog 2"/>
            <img src={obj3.message} width={200} alt="Random dog 3"/>
        </div>
    )
}
