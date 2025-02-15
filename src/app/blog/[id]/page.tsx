import React from 'react'
import { Card } from "antd";
import { blogs } from '@/data/blogs';

export default function Page({ params }: { params: { id: string } }) {
    const item = blogs.find((item) => item.id === +params.id);

    return (
        <div>
            <Card title={item?.title}>
                <p>{item?.body}</p>
            </Card>
        </div>
    )
}
