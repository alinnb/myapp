
export async function POST(request: Request) {
    const body = await request.json();
    const { login, password } = body;

    console.log(login, password);

    //调用后端接口
    await fetch('https://api.zhihur.com//admin/auth/sign_in', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    })
}