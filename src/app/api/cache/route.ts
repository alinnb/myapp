import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const r = await fetch("http://dog.ceo/api/breeds/image/random");
    const data = await r.json();
    const path = request.nextUrl.pathname;
    return NextResponse.json(data);
}
// /api/revalidateCache?path=/ =》校验 / 路径的缓存
// /api/revalidateCache?path=/api/cache =》 校验 /api/cache 路径的缓存