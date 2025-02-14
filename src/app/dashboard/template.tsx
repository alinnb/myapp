"use client"
import { useState } from "react"
 
export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0) 
  return <div>
    <div className="border-2 border-dashed border-black p-4 mx-auto mt-10">
      <h2>我是Dashboard Template</h2>
      <p>dashboard count {count}</p>
      <button className="bg-blue-500" onClick={() => setCount((count + 1))}>Increment</button>
      {children}</div>
  </div>
}