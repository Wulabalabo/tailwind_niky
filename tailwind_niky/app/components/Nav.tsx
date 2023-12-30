import {headerLogo} from '../../public/assets/images'
import { hamburger } from '@/public/assets/icons';
import Image from 'next/image'
import { navLinks } from '../constants';
const Nav = () => {
    return (
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <Image
              src={headerLogo}
              alt={"Logo"}
              width={130}
              height={29}
            ></Image>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden max-lg:block'>
            <Image src={hamburger} alt={"Hamburger"} width={25} height={25}></Image>
          </div>
        </nav>
      </header>
    );
}

export default Nav