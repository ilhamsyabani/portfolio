'use client';

import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(()=>{
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return ()=> window.removeEventListener('scroll', scrollYPos);
    });
    return (
        <header className={`${header ? 'py-4 bg-white shadow-md dark:bg-slate-800/30':
        'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#F6F7F8]'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center lg:px-[6rem]">
                    <Logo />
                    <div className="flex items-center gap-x-8">
                        <Nav
                            containerStyle="hidden xl:flex gap-x-8 items-center"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyle="absolute left-0 bottom-0 h-[4px] bg-primary w-full"
                        />
                        <ThemeToggler />
                        {/* Mobile nav */}
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
