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
      <body className='bg-neonCity bg-cover bg-fixed  text-white scroll-smooth'>
      <div className=' bg-glass fixed top-0 left-0 z-50 w-screen flex flex-row justify-center py-3 duration-300'>
        <ul className=' lg:text-2xl text-lg flex flex-row gap-6 max-w-4xl'>
          <li><a className='p-2 hover:text-indigo-300 hover:duration-300' href="/">Home</a></li>
          <li><a className='p-2 hover:text-indigo-300 hover:duration-300' href="/projects">Projects</a></li>
          <li><a className='p-2 hover:text-indigo-300 hover:duration-300' href="/experimental">Experimental</a></li>
        </ul>
      </div>
        {children}</body>
    </html>
  )
}
