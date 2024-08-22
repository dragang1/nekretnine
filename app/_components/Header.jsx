'use client';
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    const path = usePathname();
    const { user, isSignedIn } = useUser();


    return (
        <div className='p-6 px-10 flex justify-between items-center shadow-sm fixed top-0 w-full z-10 bg-white'>
            <div className='flex gap-10 items-center'>
                <Link href={'/'} >
                    <div className='flex items-center gap-10'>

                        <Image src={'/logo.svg'} width={100} height={100} alt='logo' />
                        <h1 className='text-3xl text-[#fd7e14] '>Nekretnine</h1>
                    </div>
                </Link>
                <ul className='hidden md:flex gap-10'>
                    <Link href={'/'}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' && 'text-primary'}`}>Prodaja</li>
                    </Link>
                    <li className='hover:text-primary font-medium text-sm cursor-pointer'>Iznajmljivanje</li>
                    <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agencije</li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <Link href={'/add-new-listing'}>
                    <Button className='flex gap-2' ><Plus className='h-5 w-5' /> Postavi svoj oglas</Button>
                </Link>
                {isSignedIn ?
                    <UserButton /> :
                    <Link href={'/sign-in'}>

                        <Button variant='outline' >Prijavi se</Button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Header