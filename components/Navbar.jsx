'use client';

import logo from '/public/assets/logo.svg';
import Image from 'next/image';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, Transition } from '@headlessui/react';

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
          <div className='flex px-6 py-3 justify-between items-center text-black font-medium'>
            <div className='md:flex-1 hidden md:block'>
              <div className='flex xl:space-x-4'>
                {navigation.map((item) => (
                  <a
                    className='hover:text-purple px-3 py-2 transition duration-300 ease-in-out'
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='md:hidden'>
              <Disclosure.Button className={open ? `toggle-btn` : ''}>
                <span className='bg-black w-8 h-1 rounded absolute top-10 -mt-0.5 transition-all duration-500 -translate-y-3'></span>
                <span className='bg-black w-8 h-1 rounded absolute top-10 -mt-0.5 transition-all duration-500 -translate-x-2'></span>
                <span className='bg-black w-8 h-1 rounded absolute top-10 -mt-0.5 transition-all duration-500 translate-y-3'></span>
                {/* {open ? (
                  <XMarkIcon className='h-8 w-8 text-black cursor-pointer hover:text-purple'></XMarkIcon>
                ) : (
                  <Bars2Icon className='h-8 w-8 text-black cursor-pointer hover:text-purple'></Bars2Icon>
                )} */}
              </Disclosure.Button>
            </div>
            <div className='md:flex-1 flex justify-center'>
              <Image
                className='h-14 w-14 md:h-20 md:w-20'
                src={logo}
                alt='white L inside a black circle'
              />
            </div>
            <div className='md:flex-1 hidden md:flex justify-end'>
              <button className='py-3 px-9 bg-gray rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:text-purple hover:bg-black'>
                Contact me
              </button>
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
            <Disclosure.Panel className='bg-white absolute top-68 w-full origin-top'>
              <div className='flex flex-col gap-6 justify-center items-center min-h-[calc(100vh-80px)]'>
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