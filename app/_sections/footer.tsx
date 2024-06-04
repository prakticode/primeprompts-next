import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full h-[300px] lg:h-[150px] flex justify-center bg-black text-white">
      <div className="w-full max-w-[1120px] flex flex-col lg:flex-row justify-between items-center px-[10px] py-[20px] lg:py-0 gap-[50px] lg:gap-0">
        <FooterLegal />
        <FooterInfo />
      </div>
    </footer>
  );
};

const FooterLegal = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-6 gap-2 items-center">
      <p>&copy; 2024 PrimePrompts Labs</p>
      <p>Mentions légales</p>
      <p>Politique de confidentialité</p>
    </div>
  )
}

const FooterInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <FooterLogo />
      <FooterSocials />
    </div>
  )
}

const FooterLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src="/logo.svg" alt="Logo" width={100} height={40} className='w-[75px] md:w-[100px]' />
      <h3 className="text-[length:var(--subheadline-font-size)] font-bold">PrimePrompts</h3>
    </div>
  )
}

const FooterSocials = () => {
  return (
    <div className="flex justify-between">
      <Link href="https://twitter.com">
        <Image src="socials/twitter.svg" alt="Twitter" width={24} height={24} />
      </Link>
      <Link href="https://instagram.com">
        <Image src="/socials/instagram.svg" alt="Instagram" width={24} height={24} />
      </Link>
      <Link href="https://linkedin.com">
        <Image src="/socials/linkedin.svg" alt="LinkedIn" width={24} height={24} />
      </Link>
      <Link href="https://facebook.com">
        <Image src="/socials/facebook.svg" alt="Facebook" width={24} height={24} />
      </Link>
      <Link href="https://youtube.com">
        <Image src="/socials/youtube.svg" alt="YouTube" width={24} height={24} />
      </Link>
    </div>
  )
}

export default Footer;
