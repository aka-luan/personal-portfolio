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
      <div id="header" className="flex flex-col-reverse md:flex-row h-[45rem]">
        <div id="header-info" className="flex flex-col w-full lg:w-[30rem] justify-between">
          <div className="space-y-8">
            <h1 className="text-7xl xl:text-8xl mt-24 mb-6">Meet <span className="before:block before:absolute before:-inset-1 
          before:-skew-y-3 before:bg-purple relative
           inline-block"><b className="relative text-white">Luan</b></span></h1>
            <h5 className="text-base ">Passionate JavaScript developer with over 5 years of experience</h5>
            <Button className='bg-purple text-white mb-40'>Hire me</Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <div key={tech.name} className={`px-7 py-3 rounded-xl text-4xl ${tech.classNames}`}>{tech.name}</div>
            ))}
          </div>
        </div>
        <div id="header-img" className="h-full">
          <span className="absolute -z-10 inset-y-0 right-0 -top-52 rounded-full w-[30rem] h-[70rem] rotate-45 bg-purple"></span>
        </div>
      </div>
    </main>
  )
}
