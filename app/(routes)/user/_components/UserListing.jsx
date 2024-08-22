import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs'
import { Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

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

    useEffect(() => {
        user && getUserListing()
    }, [user])


    return (
        <div>
            <h2 className='font-bold text-xl'>Uredi oglase</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                {listing && listing.map((item, index) => (
                    <div className='p-3 hover:border hover:border-primary cursor-pointer rounded-lg' key={item.id} >
                        <h2 className='bg-primary text-white absolute px-2 text-sm p-1 m-1 rounded-lg'>{item.active ? 'Objavljen' : 'Sacuvan'}</h2>
                        <Image src={item.listingImages[0]?.url}
                            width={800}
                            height={150}
                            alt='propertyImage'
                            className='rounded-lg object-cover h-[170px]'

                        />
                        <div className='flex mt-2 flex-col gap-2'>
                            <h2 className='font-bold text-xl'>${item?.price}</h2>
                            <h3 className='flex gap-2 text-sm text-gray-500'><MapPin className='w-4 h-4' />{item?.address}</h3>
                        </div>
                        <div className='flex mt-2 gap-2  justify-between'>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><BedDouble className='h-4 w-4' />{item?.bedroom}</h2>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><Bath className='h-4 w-4' />{item?.bathroom}</h2>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><Ruler className='h-4 w-4' />{item?.area}</h2>
                        </div>
                        <div className='flex  gap-2'>

                            <Button size='sm' className='w-full' type='outline' >Uredi</Button>
                            <Button size='sm' className='w-full' >Pogledaj</Button>
                            <Button size='sm' variant='destructive'>Obrisi</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserListing