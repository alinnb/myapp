import Link from "next/link";
// 强制动态编译
export const dynamic = 'force-dynamic';

export default function CacheLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex gap-3">
                <Link href={'/news'}>新闻</Link>
                <Link href={'/sports'}>体育</Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
