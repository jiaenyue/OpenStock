'use client'


import React from 'react'
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import SearchCommand from '@/components/SearchCommand';

/**
 * 渲染导航项列表。
 *
 * @param {object} props - 组件属性。
 * @param {StockWithWatchlistStatus[]} props.initialStocks - 要在搜索命令中显示的初始股票列表。
 * @returns {JSX.Element} 一个导航项的无序列表。
 */
const NavItems = ({ initialStocks }: { initialStocks: StockWithWatchlistStatus[] }) => {
    const pathname = usePathname();

    /**
     * 检查给定路径是否为当前活动路径。
     * @param {string} path - 要检查的路径。
     * @returns {boolean} 如果路径处于活动状态，则为 true，否则为 false。
     */
    const isActive = (path: string) => {
        if (path ==='/') return pathname === '/'

        return  pathname.startsWith(path);
    }
    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({href, label}) => {
                if (href === '/search') return (
                    <li key="search-trigger">
                        <SearchCommand
                            renderAs="text"
                            label="Search"
                            initialStocks={initialStocks}
                        />
                    </li>
                )
                return <li key={href}>
                    <Link href={href} className={`hover:text-teal-500 transition-colors ${isActive(href) ? 'text-gray-100' : ''}`}>
                        {label}
                    </Link>
                </li>
            })}
        </ul>
    )
}
export default NavItems
