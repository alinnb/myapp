'use client'
import BlogList from '@/app/components/bloglist'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

// 博客列表页面组件
// 使用 Ant Design 的 List 组件展示所有博客文章
// 每篇文章显示头像、标题（可点击跳转到详情页）和内容摘要
export default function Page() {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'DELETE',
            })
            if (response.ok) {
                // 清除本地存储的token
                localStorage.removeItem('token')
                // 跳转到登录页面
                router.push('/login')
            }
        } catch (error) {
            console.error('退出登录失败:', error)
        }
    }

    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button onClick={handleLogout} type="primary" danger>
                    退出登录
                </Button>
            </div>
            <BlogList />
        </div>
    )
}
