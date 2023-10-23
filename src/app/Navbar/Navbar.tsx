import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className='bg-base-100'>
      <div className='navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row'>
        <div className='flex-1'>
          <Link className='btn btn-ghost text-xl normal-case' href='/'>
            <Image src={logo} alt='next-shop logo' width={40} height={40} />
            Next Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
