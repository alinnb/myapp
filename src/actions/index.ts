'use server'

import { revalidatePath } from "next/cache"

const data: string[] = ['吃饭', '睡觉', '打豆豆']

export async function getTodo() {
    return data
}

export async function addTodo(userId:string, fromData: FormData) {
    const rawFormdata = Object.fromEntries(fromData)
    console.log(userId)
    console.log(rawFormdata)

    data.push(rawFormdata.todo as string)

    // 重新验证数据 
    revalidatePath('/')
    console.log(data)
}