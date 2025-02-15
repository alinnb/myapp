'use client'
import React from 'react'
import { Avatar, List } from "antd";
import { blogs } from './../../data/blogs'
import Link from 'next/link';

export default function BlogList() {
  return (
    <List
        // 设置列表项为水平布局
        itemLayout="horizontal"
        // 使用 blogs 数组作为数据源
        dataSource={blogs}
        // 自定义渲染每个列表项
        renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta 
                    // 使用 Tailwind CSS 强制设置垂直居中对齐
                    className='!items-center'
                    // 使用 DiceBear API 生成随机头像
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    // 标题使用 Next.js 的 Link 组件实现路由跳转
                    title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
                    // 显示文章内容作为描述
                    description={item.body}
                />
            </List.Item>
        )}
    />
  )
}
