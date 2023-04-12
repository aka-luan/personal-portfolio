import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} bg-white`}>
        <div className='container mx-auto'>
          <nav className='flex p-6 justify-between items-center text-darkgray font-bold'>
            <div className='flex-1'>
              <ul className='flex'>
                <li className='mr-6 hover:text-orange transition duration-300 ease-in-out'>
                  <a href='#'>About me</a>
                </li>
                <li className='mr-6 hover:text-orange transition duration-300 ease-in-out'>
                  <a href='#'>Projects</a>
                </li>
                <li className='mr-6 hover:text-orange transition duration-300 ease-in-out'>
                  <a href='#'>Experience</a>
                </li>
              </ul>
            </div>
            <h1 className='flex-1 flex justify-center'>logo</h1>
            <div className='flex-1 flex justify-end'>
              <button className='py-3 px-9 bg-gray rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:bg-black'>Contact me</button>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
