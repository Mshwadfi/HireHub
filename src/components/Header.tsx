import Link from 'next/link'
import React from 'react'
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs'
const Header = () => {
  return (
    <div className='container mx-auto flex justify-between items-center p-3 '>
       <Link href={'/'}><h1 className='font-extrabold'>Hire<span className='text-cyan-600'>Hub</span></h1></Link>
       <div className='flex gap-4'>
       <nav className='flex items-center justify-center gap-3 *:py-2 *:px-4 *:rounded-md'>
        <SignedOut>
        <Link className='bg-gray-200' href={'https://enjoyed-hen-3.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F'}>Login</Link>
        </SignedOut>
        <Link className='bg-cyan-500 text-white' href={'/list-job'}>Post Job</Link>
       </nav>
       <SignedIn>
          <UserButton />
        </SignedIn>
       </div>
    </div>
  )
}

export default Header
