'use client'
import { useRouter } from "next/navigation";

export default function CacheLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <div>
            <div className="flex gap-3">
                <span onClick={() => {
                    router.push('/news')
                    router.refresh()
                }}>新闻</span>
                <span onClick={() => {
                    router.push('/sports')
                    router.refresh()
                }}>体育</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
