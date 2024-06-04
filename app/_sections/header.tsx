import Image from 'next/image';
import MobileMenu from '../_components/mobile-menu';

const Header = () => {
  return (
    <header className="w-full min-h-[75px] flex justify-center items-center border-b-2 border-[rgba(var(--primary-color),0.2)]">
      <Nav />
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="w-full max-w-[1120px] flex justify-between items-center px-[10px]">
      <NavLogo />
      <NavAuth />
      <MobileMenu />
    </nav>
  )
}

const NavLogo = () => {
  return (
    <div className="flex items-center gap-[14px]">
      <Image src="/logo.svg" alt="Logo" width={100} height={40} className='w-[75px] md:w-[100px]' />
      <h3 className="text-[length:var(--subheadline-font-size)] font-bold">PrimePrompts</h3>
    </div>
  )
}

const NavAuth = () => {
  return (
    <div className="hidden md:flex gap-6">
      <button className="p-[10px] text-[length:var(--body-font-size)] border-none rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[#DDDDDD]">Connexion</button>
      <button className="py-[10px] px-[20px] text-[length:var(--body-font-size)] text-[color:rgb(var(--secondary-color))] bg-black rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-opacity-80">Essayer PrimePrompts</button>
    </div>
  )
}

export default Header;