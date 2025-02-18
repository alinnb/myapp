import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { login, password } = body;

    console.log(login, password);

    // BFF 模式
    // await fetch("("URL_ADDRESS.123456789.com/api/v1/user/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         login,
    //         password,
    //     }),
    // })

     // 验证账号密码
     if (login !== 'admin' || password !== '123123') {
        return NextResponse.json({
            status: false,
            message: "账号或密码错误"
        })
    }

    // 模拟登录成功返回数据
    const res = NextResponse.json({
        status: true,
        message: "登录成功",
    })

    res.cookies.set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDg0OTg3NzcsImV4cCI6MTcwODU4NTE3N30",
        { path: '/', maxAge: 60 * 60 * 24 * 7, httpOnly: true })
    return res
}