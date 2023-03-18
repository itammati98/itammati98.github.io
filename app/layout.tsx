import './globals.css'

export const metadata = {
  title: 'Itammati',
  description: 'Hi! My name is Matt. This is first of all my personal playground, and second of all, a portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-slate-600 text-slate-300 scroll-smooth'>
      <div className=' bg-slate-700 flex flex-row justify-center py-3 mb-12 duration-300'>
        <ul className=' text-2xl flex flex-row gap-6 max-w-4xl'>
          <li><a className='p-2 hover:text-indigo-300 hover:duration-300' href="/">Home</a></li>
          <li><a className='p-2 hover:text-indigo-300 hover:duration-300' href="/projects">Projects</a></li>
          <li><a className='p-2 hover:text-indigo-300 hover:duration-300' href="">Experimental</a></li>
        </ul>
      </div>
        {children}</body>
    </html>
  )
}
