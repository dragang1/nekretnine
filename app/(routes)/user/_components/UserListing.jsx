import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs'

import { Bath, BedDouble, MapPin, Ruler, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function UserListing() {
    const [listing, setListing] = useState();

    const { user } = useUser();

    const getUserListing = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(url,listing_id)`)
            .eq('createdBy', user?.primaryEmailAddress.emailAddress)

        setListing(data);

        if (error) (
            toast('Error')
        )
    }

    const deleteUserListing = async (listing_id) => {

        const { error: listingImagesError } = await supabase
            .from('listingImages')
            .delete()
            .eq('listing_id', listing_id);

        if (listingImagesError) {

            toast.error('Greska pri brisanju');
            return;
        }


        const { error: listingError } = await supabase
            .from('listing')
            .delete()
            .eq('id', listing_id);

        if (listingError) {
            ;
            toast.error('Greska pri brisanju');
            return;
        }

        toast.success('Oglas obrisan!');
        getUserListing();
    };


    useEffect(() => {
        user && getUserListing()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    return (
        <div >
            <h2 className='font-bold text-xl'>Uredi oglase</h2>
            <div className='gap-4 flex flex-col '>

                {listing && listing.map((item, index) => (
                    <div className='p-2 hover:border hover:border-primary cursor-pointer rounded-lg' key={item.id} >
                        <h2 className='bg-primary text-white absolute px-2 text-sm p-1 m-1 rounded-lg'>{item.active ? 'Objavljen' : 'Sacuvan'}</h2>
                        <Image src={item?.listingImages[0] ? item?.listingImages[0]?.url : '/placeholder.jpg'}
                            width={800}
                            height={150}
                            alt='propertyImage'
                            className='rounded-lg object-cover h-[170px]'


                        />

                        <div className='flex mt-2 flex-col gap-2'>
                            <h2 className='font-bold text-xl'>${item?.price}</h2>
                            <h3 className='flex gap-2 text-sm text-gray-500 '><MapPin className='w-4 h-4' />{item?.address}</h3>
                        </div>
                        <div className='flex mt-2 gap-2  justify-between'>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><BedDouble className='h-4 w-4' />{item?.bedroom}</h2>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><Bath className='h-4 w-4' />{item?.bathroom}</h2>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><Ruler className='h-4 w-4' />{item?.area}</h2>
                        </div>
                        <div className='flex justify-between gap-2 mt-5'>
                            <Link href={'/edit-listing/' + item.id} className='w-full'  >
                                <Button size='sm' className='w-full' >Uredi</Button>
                            </Link>

                            <Link href={'/view-listing/' + item.id} className='w-full' >
                                <Button size='sm' className='w-full'  >Pogledaj</Button>
                            </Link>


                            <AlertDialog >
                                <AlertDialogTrigger>
                                    <Button size='sm' variant='destructive' className='w-full'><Trash /></Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Jeste li sigurni?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Oglas ce se trajno obrisati iz baze podataka.Ova akcija ne moze biti vracena.

                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Otkazi</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => deleteUserListing(item.id)} >Nastavi</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>





                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default UserListing