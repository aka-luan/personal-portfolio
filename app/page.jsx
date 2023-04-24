import Button from "@/components/Button";

const stack = [
  {name: 'html', classNames: 'bg-purple opacity-50 text-white'},
  {name: 'javascript', classNames: 'bg-purple opacity-100 text-white'},
  {name: 'react', classNames: 'bg-black opacity-100 text-white'},
  {name: 'css', classNames: 'bg-gray opacity-100 text-black'}
]

export default function Home() {
  return (
    <main className="px-5">
      <div id="header" className="flex flex-col-reverse lg:flex-row">
        <div id="header-info" className="flex-col w-[30rem]">
          <h1 className="text-7xl xl:text-8xl mt-16 mb-6">Meet <b>Luan</b></h1>
          <h5 className="text-base mb-10">Javascript developer with over 5 years of experience</h5>
          <Button className='bg-purple text-white mb-40'>Hire me</Button>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <div key={tech.name} className={` px-7 py-3 rounded-xl text-4xl ${tech.classNames}`}>{tech.name}</div>
            ))}
          </div>
        </div>
        <div id="header-img">img</div>
      </div>
    </main>
  )
}
