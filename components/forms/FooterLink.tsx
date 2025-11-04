import React from 'react';
import Link from 'next/link';

/**
 * FooterLink 组件的属性。
 * @property {string} text - 链接前的文本。
 * @property {string} linkText - 链接的文本。
 * @property {string} href - 链接的 URL。
 */
type FooterLinkProps = {
    text: string;
    linkText: string;
    href: string;
};

/**
 * 渲染一个带有文本和链接的页脚链接。
 *
 * @param {FooterLinkProps} props - FooterLink 的属性。
 * @returns {JSX.Element} 一个包含文本和链接的页脚链接。
 */
const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
    return (
        <div className='text-center pt-4'>
            <p className="text-sm text-gray-500">
                {text}{` `}
                <Link href={href} className="footer-link">
                    {linkText}
                </Link>
            </p>
        </div>
    )
}
export default FooterLink
