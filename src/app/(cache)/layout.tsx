'use client'

import Link from "next/link";
import NavigationEvents from "../components/navigation-events";
import { Suspense } from "react";

export default function CacheLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex gap-4">
                <Link href={'/news'}>新闻</Link>
                <Link href={'/sports'}>体育</Link>
            </div>
            <div>
                {children}
                <Suspense fallback={null}>
                    <NavigationEvents />
                </Suspense>
            </div>
        </div>
    );
}
