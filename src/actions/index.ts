'use server'

import { revalidatePath } from "next/cache"
import { FormState, RedFormData } from '@/app/type'
import { sleep } from "@/app/utils"
import { z } from 'zod'

// 定义表单验证 schema
const formSchema = z.object({
    name: z.string()
        .min(1, '姓名不能为空')
        .max(4, '姓名不能超过4个字符'),
    email: z.string()
        .min(1, '邮箱不能为空')
        .email('邮箱格式不正确'),
    phone: z.string()
        .min(1, '手机号不能为空')
        .regex(/^1[3-9]\d{9}$/, '手机号格式不正确'),
    age: z.number()
        .min(0, '年龄不能小于0岁')
        .max(150, '年龄不能超过150岁'),
    gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({ message: '请选择有效的性别' })
    }),
    occupation: z.string()
        .min(1, '职业不能为空')
        .max(50, '职业名称过长'),
    interests: z.array(z.string()),
    address: z.object({
        street: z.string().min(1, '街道地址不能为空'),
        city: z.string().min(1, '城市不能为空'),
        country: z.string().min(1, '国家不能为空'),
        postalCode: z.string().min(1, '邮政编码不能为空'),
    }),
    newsletter: z.boolean(),
    comments: z.string().optional(),
})

let redFormData: FormData = {} as FormData

export async function submitRedFormAction(prevState: FormState,
    formData: FormData
): Promise<FormState> {
    revalidatePath('/')
    sleep(30000)

    try {
        // 从 FormData 构建数据对象
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            age: Number(formData.get('age')),
            gender: formData.get('gender'),
            occupation: formData.get('occupation'),
            interests: formData.getAll('interests'),
            address: {
                street: formData.get('address.street'),
                city: formData.get('address.city'),
                country: formData.get('address.country'),
                postalCode: formData.get('address.postalCode'),
            },
            newsletter: formData.get('newsletter') === 'true',
            comments: formData.get('comments'),
        }

        // 使用 Zod 验证数据
        const validatedData = formSchema.parse(data)
        
        // 保存表单数据
        redFormData = formData
        console.log('表单数据已保存:', redFormData)
    
        return {
            message: `成功处理表单数据`,
            error: null,
            status: 'success',
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            // 获取第一个错误信息
            const firstError = error.errors[0]
            return {
                message: '',
                error: firstError.message,
                status: 'error'
            }
        }
        return {
            message: '',
            error: '处理失败',
            status: 'error'
        }
    }
}