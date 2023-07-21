import Searchbar from './components/Searchbar'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-auto overflow-hidden'>
      <h1 className='font-bold text-4xl mt-12 bg-gradient-to-r from-blue-600 to-red-500 rounded-md shadow-md p-4'> 
        <Link href='/'>
          Star Wars Search
        </Link>
      </h1>
      <Searchbar />
    </div>
  )
}
