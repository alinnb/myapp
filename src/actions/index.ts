'use server'

import { revalidatePath } from "next/cache"
import { FormState, RedFormData } from '@/app/type'
import { sleep } from "@/app/utils"

let redFormData: FormData = {} as FormData

export async function submitRedFormAction(prevState: FormState,
    formData: FormData
): Promise<FormState> {
    // 重新验证数据
    revalidatePath('/')

    sleep(30000)

    try {
        // 验证必填字段
        const name = formData.get('name')
        const email = formData.get('email')
        const phone = formData.get('phone')
        const age = formData.get('age')
        const gender = formData.get('gender')
        const occupation = formData.get('occupation')

        // 验证必填字段是否存在
        if (!name || !email || !phone || !age || !gender || !occupation) {
            throw new Error('必填字段不能为空')
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email.toString())) {
            throw new Error('邮箱格式不正确')
        }

        // 验证手机号格式（中国大陆手机号）
        const phoneRegex = /^1[3-9]\d{9}$/
        if (!phoneRegex.test(phone.toString())) {
            throw new Error('手机号格式不正确')
        }

        // 验证年龄范围
        const ageNum = Number(age)
        if (isNaN(ageNum) || ageNum < 0 || ageNum > 150) {
            throw new Error('年龄必须在 0-150 之间')
        }
        
        // 保存表单数据
        redFormData = formData
        console.log('表单数据已保存:', redFormData)
    
        return {
            message: `成功处理表单数据`,
            error: null,
            status: 'success',
        }
    } catch (error) {
        return {
            message: '',
            error: error instanceof Error ? error.message : '处理失败',
            status: 'error'
        }
    }
}