
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// /api/revalidateCache?path=/ =》校验 / 路径的缓存
// /api/revalidateCache?path=/api/cache =》 校验 /api/cache 路径的缓存

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
    if(path) {
        await revalidatePath(path);
        return NextResponse.json({revalidated: true, time: Date.now()});
    }
    return NextResponse.json({revalidated: false, time: Date.now()});
}