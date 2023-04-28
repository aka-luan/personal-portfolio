import Button from "@/components/Button";

import Image from 'next/image';

import myself from "../public/assets/myself.png"

const stack = [
  { name: 'html', classNames: 'bg-purple opacity-50 text-white' },
  { name: 'javascript', classNames: 'bg-purple opacity-100 text-white' },
  { name: 'react', classNames: 'bg-black opacity-100 text-white' },
  { name: 'css', classNames: 'bg-gray opacity-100 text-black' }
]

export default function Home() {
  return (
    <main className="px-5">
      <div id="header" className="flex flex-col-reverse md:flex-row lg:h-[45.50rem]">
        <div id="header-info" className="flex-3 flex flex-col w-full lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem] justify-between">
          <div className="space-y-8">
            <h1 className="text-7xl 2xl:text-8xl mt-24 mb-6 leading-normal max-[1279px]:flex max-[1279px]:flex-col max-[1279px]:items-center">Meet <span className="before:block before:absolute before:-inset-1 
          before:-skew-y-3 before:bg-purple relative
           inline-block"><b className="relative text-white">Luan</b></span></h1>
            <h5 className="text-base ">Passionate JavaScript developer with over 5 years of experience</h5>
            <Button className='bg-purple text-white mb-40'>Hire me</Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <div key={tech.name} className={`px-6 py-3 rounded-xl text-3xl xl:text-4xl ${tech.classNames}`}>{tech.name}</div>
            ))}
          </div>
        </div>
        <div id="header-img" className="flex-9">
          <div class="absolute top-0 right-0 [mask-image:url(../public/assets/mask.svg)] [mask-size:_100%_100%;] w-[50rem] h-[50rem]  -z-10">
            <div class="absolute bg-[url(/assets/rounded_rect.svg)]  [background-size:100%_100%] bg-right-top w-full h-full -z-[1]"></div>
            <Image src={myself} alt="" class="relative top-10 right-40 block w-full h-full object-contain scale-110" />
          </div>
        </div>
      </div>
    </main>
  )
}
