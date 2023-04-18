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
          <div className='flex px-6 pb-6 pt-3 justify-between items-center text-black font-medium'>
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
              <Disclosure.Button>
                <div className='w-7 h-0.5 bg-black rounded absolute top-4 -mt-0.5
                before:content-[""] before:bg-black before:w-7 before:h-0.5 before:rounded before:absolute
                before:transition-all before:duration-500 before:-translate-x-5 before:translate-y-2
                after:content-[""] after:bg-black after:w-7 after:h-0.5 after:rounded after:absolute
                after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-4'></div>
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
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel className='bg-black absolute inset-0 h-screen'>
              <div>adsasds</div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar