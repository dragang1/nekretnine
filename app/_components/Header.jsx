'use client';
import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';


function Header() {
    const path = usePathname();
    const { user, isSignedIn } = useUser();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>

            {isMobile ? (


                <BurgerMenu />

            ) : (
                <div className='my-7  md:p-10  flex flex-col md:flex-row md:justify-between items-center shadow-sm top-0 w-full z-10 bg-white fixed' >
                    <div className='flex flex-col  gap-10 '>
                        <Link href={'/'} >
                            <div className='flex items-center gap-10'>

                                <Image src={'/logo.svg'} width={70} height={100} alt='logo' />
                                <h1 className='text-2xl md:text-3xl text-[#fd7e14]'>NEKRETNINE</h1>
                            </div>
                        </Link>
                        <ul className=' flex gap-10 mb-3 '>
                            <Link href={'/'}>
                                <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' && 'text-primary'}`}>Prodaja</li>
                            </Link>
                            <Link href={'/rent'}>
                                <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/rent' && "text-primary"}`} >Iznajmljivanje</li>
                            </Link>
                            <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agencije</li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <Link href={'/add-new-listing'}>
                            <Button className='flex gap-2' ><Plus className='h-5 w-5' /> Postavi svoj oglas</Button>
                        </Link>
                        {isSignedIn ?
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Image src={user?.imageUrl} width={35} height={35} alt='user profile' className='rounded-full cursor-pointer ' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Moj nalog</DropdownMenuLabel>
                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem><Link href={'/user'}>Profil</Link></DropdownMenuItem>
                                    <DropdownMenuItem>Moji oglasi</DropdownMenuItem>
                                    <DropdownMenuItem><SignOutButton>Odjava</SignOutButton></DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>

                            :
                            <Link href={'/sign-in'}>

                                <Button variant='outline' >Prijavi se</Button>
                            </Link>
                        }

                    </div>
                </div>

            )}


        </>

    )
}

export default Header