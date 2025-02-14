"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  const path = usePathname()

  console.log(path)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        <Link className={path==="/dashboard/about" ? "text-purple-500" : " text-black-500"} href="/dashboard/about">About</Link>
        <Link className={path==="/dashboard/setting" ? "text-purple-500" : " text-black-500"} href="/dashboard/setting">Setting</Link>
      </div>
      <h2>我是Dashboard Layout</h2>
      <p>dashboard count {count}</p>
      <button className="bg-blue-500" onClick={() => setCount((count + 1))}>Increment</button>
      {children}
    </div>
  );
}
