import './globals.css';
import { Nunito } from 'next/font/google';
import logo from '/public/assets/logo.svg'
import Image from 'next/image'
import { Bars2Icon } from '@heroicons/react/24/outline'

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} bg-white text-xs lg:text-base`}>
        <div className='container mx-auto'>
          <nav className='flex p-6 justify-between items-center text-black font-bold'>
            <div className='md:flex-1 hidden md:block'>
              <ul className='flex'>
                <li className='mr-6 hover:text-purple transition duration-300 ease-in-out'>
                  <a href='#'>About me</a>
                </li>
                <li className='mr-6 hover:text-purple transition duration-300 ease-in-out'>
                  <a href='#'>Projects</a>
                </li>
                <li className='mr-6 hover:text-purple transition duration-300 ease-in-out'>
                  <a href='#'>Experience</a>
                </li>
              </ul>
            </div>
            <div className='md:hidden'>
              <Bars2Icon className='h-8 w-8 text-black cursor-pointer hover:text-purple'></Bars2Icon>
            </div>
            <div className='md:flex-1 flex justify-center items-center'>
              <Image className='scale-75 lg:scale-100 h-40 w-40 absolute' src={logo} alt="white L inside a black circle" />
            </div>
            <div className='md:flex-1 flex hidden sm:block justify-end'>
              <button className='py-3 px-9 bg-gray rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:text-purple hover:bg-black'>Contact me</button>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
