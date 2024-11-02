'use client';
import { Button } from '@/components/ui/button';
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';

function Header() {
    const path = usePathname();
    const { user, isSignedIn } = useUser();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial state on mount
        handleResize();
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
                <div className='my-7 md:p-10 flex flex-col md:flex-row md:justify-between items-center shadow-sm top-0 w-full z-10 '>
                    <div className='flex flex-col gap-6'>
                        <Link href='/' aria-label="Home">
                            <div className='flex items-center gap-4'>
                                <Image src='/logo.svg' width={70} height={100} alt='logo' />
                                <h1 className='text-2xl md:text-3xl text-[#fd7e14]'>NEKRETNINE</h1>
                            </div>
                        </Link>
                        <ul className='flex gap-6 mb-3'>
                            <li key="prodaja">
                                <Link href='/' aria-label="Prodaja">
                                    <span className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' && 'text-primary'}`}>Prodaja</span>
                                </Link>
                            </li>
                            <li key="iznajmljivanje">
                                <Link href='/rent' aria-label="Iznajmljivanje">
                                    <span className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/rent' && "text-primary"}`}>Iznajmljivanje</span>
                                </Link>
                            </li>
                            <li key="agencije">
                                <span className='hover:text-primary font-medium text-sm cursor-pointer'>Agencije</span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Link href='/add-new-listing' aria-label="Add New Listing">
                            <Button className='flex gap-2'><Plus className='h-5 w-5' /> Postavi svoj oglas</Button>
                        </Link>
                        {isSignedIn ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button aria-label="User Menu">
                                        <Image src={user?.imageUrl} width={35} height={35} alt='user profile' className='rounded-full cursor-pointer' />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Moj nalog</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href='/user'>Profil</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href='/my-ads'>Moji oglasi</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <SignOutButton>Odjava</SignOutButton>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href='/sign-in' aria-label="Sign In">
                                <Button variant='outline'>Prijavi se</Button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
