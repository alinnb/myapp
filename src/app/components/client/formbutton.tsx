'use client'
import React from 'react'
import { addTodo } from "@/actions";

export default function FormButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="border p-2" onClick={async () => {
            const formData = new FormData()
            formData.append('todo', '牛牛')
            await addTodo(formData)
        }}>
            {children}
        </button>
    )
}
