'use client'

import React, { useActionState, useState } from 'react'
import { RedFormData, FormState } from '@/app/type'
import { submitRedFormAction } from '@/actions'
import { useFormStatus } from 'react-dom'

// 初始状态
const initialState: FormState = {
    message: '',
    error: null,
    status: 'idle'
}

const tmpData: RedFormData = {
    name: '小丰',
    email: 'zhengyuying@mxcorp.cn',
    phone: '13512341111',
    age: 11,
    gender: 'male',
    occupation: 'Engineer',
    interests: ['阅读', '运动'],
    address: {
        street: '福山路388号503室',
        city: '上海',
        country: '中国',
        postalCode: '201203',
    },
    newsletter: true,
    comments: '随便说说',
}

export default function RedForm() {
    const [redFormData, setFormData] = useState<RedFormData>(tmpData)
    const [state, formAction, isPending] = useActionState<FormState, FormData>(submitRedFormAction, initialState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        if (name.includes('.')) {
            // 处理嵌套的地址字段
            const [parent, child] = name.split('.')
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...(prev[parent as keyof RedFormData] as Record<string, string>),
                    [child]: value
                }
            }))
        } else {
            // 处理普通字段
            setFormData(prev => ({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }))
        }
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }))
    }

    const handleInterestChange = (interest: string) => {
        setFormData(prev => {
            const interests = prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
            return { ...prev, interests }
        })
    }

    return (
        <form action={formAction}  className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">个人信息表单</h2>
            <div>
                {state.error && <div className="text-red-500 mb-4">{state.error}</div>}
                {state.status === 'success' && <div className="text-green-500 mb-4">{state.message}</div>}
            </div>

            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                    <input
                        type="text"
                        name="name"
                        value={redFormData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                    <input
                        type="email"
                        name="email"
                        value={redFormData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">电话</label>
                    <input
                        type="tel"
                        name="phone"
                        value={redFormData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">年龄</label>
                    <input
                        type="number"
                        name="age"
                        value={redFormData.age}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>

            {/* 性别选择 */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">性别</label>
                <div className="flex gap-4">
                    {['male', 'female', 'other'].map((gender) => (
                        <label key={gender} className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={redFormData.gender === gender}
                                onChange={handleInputChange}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-600">
                                {gender === 'male' ? '男' : gender === 'female' ? '女' : '其他'}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* 职业 */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">职业</label>
                <input
                    type="text"
                    name="occupation"
                    value={redFormData.occupation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* 兴趣爱好 */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">兴趣爱好</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['阅读', '运动', '音乐', '旅行', '摄影', '美食'].map((interest) => (
                        <label key={interest} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={redFormData.interests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-600">{interest}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* 地址信息 */}
            <div className="mb-4">
                <h3 className="text-base font-medium text-gray-800 mb-3">地址信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">街道地址</label>
                        <input
                            type="text"
                            name="address.street"
                            value={redFormData.address.street}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">城市</label>
                        <input
                            type="text"
                            name="address.city"
                            value={redFormData.address.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">国家</label>
                        <input
                            type="text"
                            name="address.country"
                            value={redFormData.address.country}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">邮政编码</label>
                        <input
                            type="text"
                            name="address.postalCode"
                            value={redFormData.address.postalCode}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* 订阅newsletter */}
            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={redFormData.newsletter}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <span className="text-sm text-gray-600">订阅我们的新闻通讯</span>
                </label>
            </div>

            {/* 备注 */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">备注</label>
                <textarea
                    name="comments"
                    value={redFormData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* 提交按钮和状态信息 */}
            <div className="flex flex-col items-center">
                <button 
                    type='submit' 
                    disabled={isPending}
                    className={`px-4 py-2 rounded-md text-white font-medium
                        ${isPending 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                >
                    {isPending? '提交中...' : '提交'}
                </button>
            </div>
        </form>
    )
}
