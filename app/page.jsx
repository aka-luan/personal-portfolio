import Button from "@/components/Button";

const stack = [
  { name: 'html', classNames: 'bg-purple opacity-50 text-white' },
  { name: 'javascript', classNames: 'bg-purple opacity-100 text-white' },
  { name: 'react', classNames: 'bg-black opacity-100 text-white' },
  { name: 'css', classNames: 'bg-gray opacity-100 text-black' }
]

export default function Home() {
  return (
    <main className="px-5">
      <div id="header" className="flex flex-col-reverse md:flex-row lg:h-[45rem]">
        <div id="header-info" className="flex flex-col w-full lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem] justify-between">
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
        <div id="header-img" className="h-full">
          <span className="absolute -z-10 inset-y-0  rounded-full rotate-45 bg-purple -right-36 xl:right-0 lg:-top-40 xl:-top-40 2xl:-top-52 
          lg:w-[25rem] lg:h-[60rem] xl:w-[25rem] xl:h-[60rem] 2xl:w-[30rem] 2xl:h-[70rem]"></span>
        </div>
      </div>
    </main>
  )
}
