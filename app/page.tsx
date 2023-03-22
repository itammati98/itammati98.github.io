import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <section className=' pt-20 min-w-full flex flex-col items-center'>
        <h1 className='px-6 text-6xl font-bold text-center'>Hi! I am <span className=' text-indigo-300'>Matt</span>!</h1>
        <h2 className=' px-3 text-3xl font-semibold text-center mb-12'>Welcome to my playground...</h2>
        <div className=' bg-glass border border-solid border-glass backdrop-blur-sm shadow-inherit mb-12 rounded-3xl p-6 max-w-fit max-h-max flex flex-row flex-wrap justify-center gap-12'>
          <Image className=' drop-shadow-md rounded-3xl' src='/avatar.png' alt='avatar image' width={500} height={500}></Image>
          <div className='p-2 w-fit text-center flex flex-col justify-center items-center'>
            <h3 className=' text-3xl'>I am a data analyst and a developer.</h3>
            <p className=' max-w-md mt-3 text-xl'>I am naturally a curious learner.<br />I believe that it is equally important to stay up with the new trends and know the legacy technologies.</p>
            <a className='hover:cursor-pointer drop-shadow-md mt-12 rounded-xl p-3 bg-slate-500 hover:bg-slate-700 hover:duration-300'>Download my CV</a>
          </div>
        </div>
      </section>
        <section className=' mb-9 py-6 w-full max-h-max flex flex-col flex-wrap items-center justify-center gap-3'>
            <h3 className='min-w-full bg-glass text-center font-semibold pt-6 pb-3 text-3xl'>Favourite projects I was working on</h3>
          <div>
          <div className=' p-6 my-9 rounded-3xl bg-glass w-fit flex flex-row flex-wrap justify-center items-center gap-12'>
            <p className=' text-right max-w-md mt-3 text-xl'><span className=' font-semibold text-3xl'>Project 1</span><br/><br/>Description of a project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est ipsum quis sequi ratione dignissimos ducimus, perferendis quia, quidem sit accusantium. Delectus placeat dignissimos officia animi eos adipisci blanditiis dicta.</p>
          <Image className='  rounded-3xl' src='/vhs.png' alt='avatar image' width={500} height={500}></Image>
          </div>
          <div className=' my-12 rounded-3xl bg-glass p-6 w-fit flex flex-row flex-wrap justify-center items-center gap-12'>
          <Image className=' rounded-3xl' src='/dragon.png' alt='avatar image' width={500} height={500}></Image>
            <p className=' text-left max-w-md mt-3 text-xl'><span className=' font-semibold text-3xl'>Project 2</span><br/><br/>Description of a project. This was a very exciting project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur perspiciatis architecto dignissimos exercitationem. Sapiente, magni voluptatum aut deleniti iste voluptatibus ullam quis, nam pariatur nisi iure, corrupti delectus soluta odio.</p>
          </div>
          <div className='my-12 rounded-3xl bg-glass p-6 w-fit text-center flex flex-row flex-wrap justify-center items-center gap-12'>
            <p className=' text-right max-w-md mt-3 text-xl'><span className=' font-semibold text-3xl'>Project 3</span><br/><br/>Description of a project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur aliquam voluptatibus possimus architecto repellat, quia omnis in culpa ipsam blanditiis quos, magni sunt. Vel obcaecati consectetur eum fuga distinctio.</p>
          <Image className='rounded-3xl' src='/singing.png' alt='avatar image' width={500} height={500}></Image>
          </div>
          </div>
        </section>
    </main>
  )
}
