import BlogList from '@/app/components/bloglist'
// 博客列表页面组件
// 使用 Ant Design 的 List 组件展示所有博客文章
// 每篇文章显示头像、标题（可点击跳转到详情页）和内容摘要
export default function Page() {
    return (
        <BlogList />
    )
}
