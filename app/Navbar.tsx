"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BrandIcon from './BrandIcon';
import { usePathname } from 'next/navigation';
import Banner from './Banner';

const navlinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Project",
        href: "/project",
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

export default function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const triggerMenuRef = React.useRef<HTMLInputElement>(null);
    const navbarRef = React.useRef<HTMLDivElement>(null);

    const pathname = usePathname();


    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const closeMenuOnResize = (): void => {
            if (window.innerWidth > 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", closeMenuOnResize);
        return () => window.removeEventListener("resize", closeMenuOnResize);
    }, []);

    useEffect(() => {
        if (triggerMenuRef.current) {
            if (isMenuOpen) {
                triggerMenuRef.current.checked = true;
            } else {
                triggerMenuRef.current.checked = false;
            }
        }

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`sticky top-0 z-50 w-screen bg-white md:relative safe-layout`} ref={navbarRef}>
                <Banner />
                <div className='flex flex-row items-center justify-between py-6 border-b-2 border-b-gray safe-x-padding'>
                    <Link className='z-50' href="/" onClick={closeMenu} prefetch={false}>
                        <div className="w-[32px] h-[40px] lg:w-[42px] lg:h-[50px]">
                            <BrandIcon />
                        </div>
                    </Link>
                    {/* desktop menu */}
                    <div className='flex-row items-center justify-between hidden text-lg font-bold md:flex md:gap-6 lg:gap-8'>
                        <ul className='flex flex-row md:gap-6 lg:gap-8 justify-evenly'>
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        className={`${pathname === link.href ? 'text-accent' : 'text-accent2'
                                            } p-4`}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                        <a className='px-6 py-2 text-white gradient-btn rounded-xl' href="/" download="Deri Kurniawan Resume">Resume</a>
                    </div>
                    {/* mobile hamburger menu */}
                    <div className="z-50 md:hidden">
                        <label className="cursor-pointer hamburger">
                            <input className='hidden' type="checkbox" ref={triggerMenuRef} onClick={toggleMenu} />
                            <svg viewBox="0 0 32 32" id='hamburger'>
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </nav>
            {/* mobile menu */}
            <div
                className={`${isMenuOpen ? "top-0" : "-translate-y-full"} fixed top-0 w-screen h-screen transition-all duration-500 ease-in-out z-40 bg-white`}
                style={{ paddingTop: navbarRef.current ? `${navbarRef.current.offsetHeight}px` : '90px' }}
            >
                <div className='flex flex-col items-center justify-between p-4 text-lg font-medium lg:hidden lg:gap-8'>
                    <ul className='flex flex-col text-4xl font-bold text-center lg:gap-8 justify-evenly text-accent2'>
                        {navlinks.map((link, index) => (
                            <li key={index} className='flex w-screen'>
                                <Link
                                    className={`flex-1 py-4 ${pathname === link.href ? 'text-accent' : ''}`}
                                    href={link.href}
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <a className='px-12 py-4 my-4 text-4xl font-bold text-white gradient-btn rounded-xl' href="/" download="Deri Kurniawan Resume">Resume</a>
                </div>
            </div>
        </>
    );
}
