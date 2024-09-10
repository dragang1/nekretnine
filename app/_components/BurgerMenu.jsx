import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignOutButton, useUser } from '@clerk/nextjs';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const { user, isSignedIn } = useUser()

    const path = usePathname;


    function toggleMenu() {
        setIsOpen(!isOpen);

    }

    function handleClick() {
        if (isOpen) {
            setIsOpen(false)

        }
    }


    return (
        <div className='flex items-center justify-center flex-col p-5 bg-white'>

            <div className={`absolute top-0 left-0 cursor-pointer p-5 ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                <div className='w-5 h-1 bg-black rounded-full mb-1'></div>
                <div className='w-5 h-1 bg-black rounded-full mb-1'></div>
                <div className='w-5 h-1 bg-black rounded-full mb-1'></div>
            </div>
            {isOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-70 z-50 cursor-pointer ' onClick={toggleMenu}>
                    <div className=' min-w-full min-h-full flex  items-center justify-center '>
                        <div className='text-3xl text-white top-0 absolute left-0 p-5' onClick={toggleMenu}>X</div>




                        <ul className=' flex flex-col text-white gap-5  '>
                            <Link href={'/'}>
                                <li className={`hover:text-primary font-medium text-xl cursor-pointer ${path === '/' && 'text-primary'}`}>Prodaja</li>
                            </Link>
                            <Link href={'/rent'}>
                                <li className={`hover:text-primary font-medium text-xl cursor-pointer ${path === '/rent' && "text-primary"}`} >Iznajmljivanje</li>
                            </Link>
                            <li className='hover:text-primary font-medium text-xl cursor-pointer'>Agencije</li>
                        </ul>
                    </div>


                </div>


            )}



            <Link href={'/'} >
                <div className='flex items-center gap-10'>

                    <Image src={'/logo.svg'} width={70} height={100} alt='logo' />
                    <h1 className='text-2xl md:text-3xl text-[#fd7e14]'>NEKRETNINE</h1>
                </div>
            </Link>
            <div className='flex gap-2 items-center mt-5 '>
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
    )
}

export default BurgerMenu