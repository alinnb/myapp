import { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function NavigationEvents() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        router.refresh()
        console.log('pathname', pathname)
        console.log('searchParams', searchParams)
    }, [pathname, searchParams])

    return null
}
