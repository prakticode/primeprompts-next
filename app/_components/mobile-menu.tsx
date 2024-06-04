"use client";

import Image from 'next/image';
import { useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div onClick={handleMenuToggle} className="md:hidden cursor-pointer">
                <Image src="/menu.svg" alt="Menu" width={40} height={40} />
            </div>
            <div className={`md:hidden fixed top-0 right-0 w-full h-full bg-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={handleMenuToggle} className="absolute top-4 right-4 text-2xl">
                    &times;
                </button>
                <nav className="flex flex-col items-center mt-16 space-y-4">
                    <button className="p-[10px] text-[length:var(--body-font-size)] border-none rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#DDDDDD]">Connexion</button>
                    <button className="py-[10px] px-[20px] text-[length:var(--body-font-size)] text-[color:rgb(var(--secondary-color))] bg-black rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-opacity-80">Essayer PrimePrompts</button>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
