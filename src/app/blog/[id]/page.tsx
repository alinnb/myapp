import React from 'react'
import { Card } from "antd";
import { blogs } from '@/data/blogs';

interface IParams {
    id: string;
}

export async function generateMetadata({ params }: { params: IParams }) {
    return {
        title: `Blog ${params.id}`,
    }
}

export default function Page({ params }: { params: IParams }) {
    const item = blogs.find((item) => item.id === +params.id);

    return (
        <div>
            <Card title={item?.title}>
                <p>{item?.body}</p>
            </Card>
        </div>
    )
}
