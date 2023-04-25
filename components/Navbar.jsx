'use client';

import logo from '/public/assets/logo.svg';
import Image from 'next/image';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, Transition } from '@headlessui/react';
import Button from './Button';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
];

const Navbar = () => {

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>  
          <div className='z-10 flex px-5 py-3 justify-between items-center text-black'>
            <div className='md:flex-1 hidden md:block'>
              <div className='flex space-x-6 xl:space-x-10'>
                {navigation.map((item) => (
                  <a
                    className='hover:text-purple py-2 transition duration-300 ease-in-out'
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='md:hidden z-30'>
              <Disclosure.Button className={` ${open ? `toggle-btn` : ''}`}>
                <span className='bg-black w-8 h-1 rounded absolute top-11 -mt-0.5 transition-all duration-500 -translate-y-3'></span>
                <span className='bg-black w-8 h-1 rounded absolute top-11 -mt-0.5 transition-all duration-500 -translate-x-2'></span>
                <span className='bg-black w-8 h-1 rounded absolute top-11 -mt-0.5 transition-all duration-500 translate-y-3'></span>
                {/* {open ? (
                  <XMarkIcon className='h-8 w-8 text-black cursor-pointer hover:text-purple'></XMarkIcon>
                ) : (
                  <Bars2Icon className='h-8 w-8 text-black cursor-pointer hover:text-purple'></Bars2Icon>
                )} */}
              </Disclosure.Button>
            </div>
            <div className='md:flex-1 flex justify-center'>
              <Image
                className='h-16 w-16 md:h-20 md:w-20'
                src={logo}
                alt='white letter L inside a black circle'
              />
            </div>
            <div className='md:flex-1 hidden md:flex justify-end'>
              <Button className={'bg-black text-white'}>Contact me</Button>
            </div>
          </div>

          <Transition
            enter="transition-all duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className='bg-white absolute z-20 top-0 w-full h-screen origin-top'>
              <div className='flex flex-col gap-6 justify-center items-center h-screen w-screen'>
                {navigation.map((item) => (
                  <a
                    className='hover:text-purple font-semibold text-3xl px-3 py-2 transition duration-300 ease-in-out'
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar