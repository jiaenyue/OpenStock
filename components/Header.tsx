import Link from "next/link";
import Image from "next/image";
import NavItems from '@/components/NavItems';
import UserDropdown from '@/components/UserDropdown';
import { searchStocks } from '@/lib/actions/finnhub.actions';

/**
 * 渲染网站的页眉。
 *
 * @param {object} props - 组件属性。
 * @param {User} props.user - 当前登录的用户。
 * @returns {JSX.Element} 一个包含徽标、导航和用户下拉菜单的页眉。
 */
const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className='sticky top-0 header'>
            <div className="container header-wrapper">
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Image
                        src="https://i.ibb.co/r28VWPjS/Screenshot-2025-10-04-123317-Picsart-Ai-Image-Enhancer-removebg-preview.png"
                        alt="OpenStock"
                        width={200}
                        height={50}
                    />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks}/>
                </nav>

                <UserDropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header