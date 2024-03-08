import { NavLinks } from '@/constants';
import { ArthProviders } from './ArthProviders';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/bus.svg"
            width={45}
            height={45}
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7' >
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session ? (
          <>
            <Image
              src = "/pro.svg"
              width={45}
              height={45}
            />
            <Link href="/switch-place">
              <Image
              src ="/map.svg"
              width={45}
              height={45}
              />
            </Link>
          </>
        ) : (
          <ArthProviders></ArthProviders>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
