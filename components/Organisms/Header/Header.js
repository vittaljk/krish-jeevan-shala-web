import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import { AiOutlineMenu } from 'react-icons/ai';
import * as Atoms from '@/components/Atoms';
import NAV_LINKS from '@/contents/nav';

function Header(props) {
  const { pathname } = useRouter();
  
  return (
    <div className="container mx-auto p-0 md:px-4 h-14 md:h-[6rem] bg-white block md:flex items-center justify-between">
      <div className="hidden md:block h-full">
        <Link href="/">
          <Atoms.Logo />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 text-black font-bold tracking-widest">
        {NAV_LINKS.map((navLink) => (
          <Link key={navLink.id} href={navLink.link}>
            <div className={`cursor-pointer ${pathname === navLink.link ? 'text-red-600' : ''}`}>{navLink.label}</div>
          </Link>
        ))}
      </div>

      <div className="h-full block md:hidden">
        <div className="h-full flex items-center justify-between">
          <Link href="/">
            <Atoms.Logo />
          </Link>
          <div className="relative flex justify-end">
            <Dropdown
              placement="left-start"
              dismissOnClick={false}
              renderTrigger={() => <AiOutlineMenu size="1.5rem" />}
            >
              {NAV_LINKS.map((navLink) => (
                <Link key={navLink.id} href={navLink.link}>
                  <Dropdown.Item><span className={`cursor-pointer ${pathname === navLink.link ? 'text-red-600' : ''}`}>{navLink.label}</span></Dropdown.Item>
                </Link>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
