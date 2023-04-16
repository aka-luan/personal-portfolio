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
      <body className={`${nunito.className} bg-white text-xs lg:text-base`}>
        <div className='container mx-auto'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
