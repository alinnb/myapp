import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  // 修复类型错误：cookies() 返回的是 ReadonlyRequestCookies 类型
  const token = await cookieStore.get('token');

  console.log('toLocaleTimeString 😀', token);
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
