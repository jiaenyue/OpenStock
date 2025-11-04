import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from "better-auth/cookies";

/**
 * @file 该文件定义了 Next.js 应用程序的中间件。
 * 它用于保护路由，确保只有经过身份验证的用户才能访问受限页面。
 */

/**
 * Next.js 中间件函数，用于保护路由。
 *
 * 此函数检查请求中是否存在会话 cookie。如果 cookie 不存在，
 * 它会将未经身份验证的用户重定向到登录页面。
 * 否则，它允许请求继续处理。
 *
 * @param {NextRequest} request - 传入的 Next.js 请求对象。
 * @returns {Promise<NextResponse>} - 一个解析为 Next.js 响应对象的 Promise，可以是重定向或继续处理的信号。
 */
export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    // 检查 cookie 是否存在 - 阻止明显未经授权的用户
    if (!sessionCookie) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    return NextResponse.next();
}

/**
 * 中间件的配置对象。
 *
 * `matcher` 属性定义了哪些路由应该被这个中间件处理。
 * 它排除了 API 路由、静态文件、图片、登录/注册页面和静态资源文件夹。
 *
 * @type {{matcher: string[]}}
 */
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|assets).*)',
    ],
};
