import { NextResponse } from 'next/server';

export async function DELETE() {

    const response = NextResponse.json({
        success: true,
        message: 'Logout successful'
    });

    response.cookies.delete('token');

    return response;
}