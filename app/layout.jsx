import './globals.css';
import { Albert_Sans } from 'next/font/google';

import Navbar from '@/components/Navbar';

const albert = Albert_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-albert',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${albert.className} bg-white w-screen`}>
        <div className=' md:container md:m-auto max-w-2xl lg:max-w-9xl '>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
