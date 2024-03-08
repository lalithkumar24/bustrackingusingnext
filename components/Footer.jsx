import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterColumn = (title,links) => {
  <div className="footer_column">
    <h4 classNmae="font-semibold">{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links && links.map((link) => <Link href="/" key={link}>{link}</Link>)}
    </ul>
  </div>
}

const Footer = () => {
  return (
    <footer className="flex-start footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/bus.svg"
            width={45}
            height={45}
          />
          <p className='text-start text-sm font-normal
          mt-5 max-w-xs'>Lorem ipsum dolor, 
          sit amet consectetur adipisicing elit. 
          </p>
          <div className='flex flex-wrap gap-12'>
            <FooterColumn title={footerLinks[0].title}
            links={footerLinks[0].links}/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
