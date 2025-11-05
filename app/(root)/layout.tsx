import Header from "@/components/Header";
import {auth} from "@/lib/better-auth/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import Footer from "@/components/Footer";

/**
 * 根路由的布局组件。
 *
 * 这个组件会验证用户会话。如果用户未登录，则重定向到登录页面。
 * 它还渲染了页眉（Header）、子组件和页脚（Footer）。
 *
 * @param {object} props - 组件的 props。
 * @param {React.ReactNode} props.children - 要在布局中渲染的子组件。
 * @returns {Promise<JSX.Element>} - 渲染后的布局组件。
 */
const Layout = async ({ children }: { children : React.ReactNode }) => {
    const session = await auth.api.getSession({ headers: await headers() });

    if(!session?.user) redirect('/sign-in');

    const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
    }

    return (
        <main className="min-h-screen text-gray-400">
            <Header user={user} />

            <div className="container py-10">
                {children}
            </div>

            <Footer />
        </main>
    )
}
export default Layout