"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";


export function logout() {
    localStorage.removeItem('token');
    
    window.location.href = "/";
}

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    const [isBgVisible, setIsBgVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {

        let token = localStorage.getItem("token");

        if(token) {
            fetch('/api/user/decode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            }).then(res => res.json())
            .then(data => {
                if(data.error) {
                    setIsLoggedIn(false);
                    localStorage.removeItem('token');
                } else {
                    setIsLoggedIn(true);
                }
            });
        }
    });

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      setIsBgVisible(window.scrollY > 60);
    };


    return (
        <section className={`sticky top-0 z-50 ${isBgVisible ? "shadow shadow-gray-500" : ""}`}>
            <nav className={`navbar flex flex-row w-full items-center justify-between p-4 lg:p-3 lg:px-8 lg:h-[6dvh] text-black transition-all ease-in-out ${isBgVisible ? 'bg-blue-500' : 'bg-white'}`}>
                {/* Brand Image */}
                <Link href="/" className="flex items-center gap-2 text-xl lg:text-2xl">
                    <img src="/medibook.svg" className="w-12" alt="Logo" />
                    <span>MediBook</span>
                </Link>

                {/* Navigation Links */}
                <div>
                    <ul className="hidden lg:flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* login, profile, logout and ham menu */}
                <div className="grid grid-flow-col h-full text-center items-center justify-center gap-3">
                    <Link href="/login" className={`bg-slate-300 h-full justify-center items-center px-4 rounded ${isLoggedIn ? 'hidden' : 'flex'}`}>Login</Link>
                    <Link href="/profile" className={`bg-slate-300 h-full justify-center items-center px-4 rounded ${isLoggedIn ? 'flex' : 'hidden'}`}>Profile</Link>
                    <button onClick={logout} className={`bg-red-300 h-full justify-center items-center px-4 rounded ${isLoggedIn ? 'flex' : 'hidden'}`}>Logout</button>
                    <button onClick={toggleMenu} className={'flex lg:hidden bg-slate-100 active:bg-blue-200 rounded transition-all ease-in-out'}>
                        <IoIosMenu fontSize={35} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <section className={`transition-all ease-in-out duration-200 overflow-hidden max-h-0 ${isOpen ? 'max-h-[20rem]': ''}`}>
                <div className={`p-3 ${isBgVisible ? 'bg-blue-400' : 'bg-white'}`}>
                    <ul className="grid grid-flow-row rounded-lg items-center bg-blue-300 text-black overflow-hidden *:flex *:*:p-4 *:*:w-full text-center nav-mobile-links">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}   