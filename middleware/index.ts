import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

/**
 * 中间件，用于检查用户是否已登录。
 *
 * @param {NextRequest} request - Next.js 请求对象。
 * @returns {Promise<NextResponse>} Next.js 响应对象。
 */
export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    // Check cookie presence - prevents obviously unauthorized users
    if (!sessionCookie) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|assets).*)',
    ],
};