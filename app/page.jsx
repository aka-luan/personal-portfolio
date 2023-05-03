import Button from "@/components/Button";

import Image from 'next/image';

import myself from "../public/assets/myself.png"

const stack = [
  { name: 'html', classNames: 'bg-purple-200 text-white' },
  { name: 'javascript', classNames: 'bg-purple text-white' },
  { name: 'react', classNames: 'bg-black text-white' },
  { name: 'css', classNames: 'bg-gray text-black' }
]

export default function Home() {
  return (
    <main className="px-5 ">
      <div id="hero" className="flex flex-col-reverse lg:flex-row pb-10 md:h-[calc(100vh-104px)] ">
        <div id="hero-info" className="flex flex-col mt-[23rem] sm:mt-48 lg:mt-0 w-full lg:w-[25rem] xl:w-[25rem] 2xl:w-[35rem] 2xl:justify-between space-y-8">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl 2xl:text-9xl lg:mt-5 xl:mt-24 mb-6 leading-normal ">Hi, <br></br> I'm <b>Luan</b></h1>
            <h5 className="text-base font-medium">Passionate JavaScript developer with over 5 years of experience, based in Belém do Pará - Brazil.</h5>
            <Button className='bg-purple text-white xl:mb-20 2xl:mb-40 font-medium'>Hire me</Button>
          </div> 
          <div className="flex flex-wrap gap-3 lg:mt-24">
            {stack.map((tech) => (
              <div key={tech.name} className={`px-6 py-3 rounded-xl text-2xl sm:text-3xl xl:text-4xl ${tech.classNames}`}>{tech.name}</div>
            ))}
          </div>
        </div>
        <div id="hero-img" className="absolute top-0 right-0 overflow-hidden max-w-full min-h-full w-full">
          <div className="absolute -top-5 -right-44 sm:-top-0 sm:-right-48 md:-top-10 md:-right-48 lg:top-0 lg:-right-56 xl:-top-20 xl:-right-56 2xl:-top-20 2xl:-right-44 
          [mask-image:url(../public/assets/mask.svg)] [mask-size:_100%_100%;] -z-10
          w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] md:w-[48rem] md:h-[48rem] xl:w-[57.5rem] xl:h-[57.5rem] 2xl:w-[62.5rem] 2xl:h-[62.5rem] 
           ">
            <div className="absolute bg-[url(/assets/rounded_rect.svg)]  [background-size:100%_100%] w-full h-full -z-[1] "></div>
            <Image src={myself} alt="" className="relative top-12 right-32 sm:right-48 md:top-20 md:right-52 lg:top-20 lg:right-52 xl:top-32 xl:right-72 2xl:top-24 2xl:right-72 block w-full h-full 
            object-contain scale-[0.85] sm:scale-90 lg:scale-[0.85] 2xl:scale-90" />
          </div>
        </div>
      </div>
    </main>
  )
}
