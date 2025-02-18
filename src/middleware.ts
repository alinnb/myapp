import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 获取请求路径
  const path = request.nextUrl.pathname;

  // 登录相关页面不需要验证
  if (path.startsWith('/login')) {
    return NextResponse.next();
  }

  // 获取token
  const token = request.cookies.get('token')?.value;

  // 如果没有token，重定向到登录页
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // TODO: 这里可以添加token验证逻辑
  // 例如：验证token是否过期，是否合法等
  // const isValidToken = validateToken(token);
  // if (!isValidToken) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  return NextResponse.next();
}

// 配置需要进行中间件处理的路径
export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};