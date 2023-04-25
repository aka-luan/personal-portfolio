import './globals.css';
import { Nunito } from 'next/font/google';

import Navbar from '@/components/Navbar';

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} bg-white overflow-hidden`}>
        <div className='lg:container relative :max-w-screen max-[767px]:overflow-hidden xl:max-w-9xl'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
