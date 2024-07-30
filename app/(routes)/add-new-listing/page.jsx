'use client'

import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function AddNewListing() {
    const [selectedAddress, setSelectedAddress] = useState();
    const [coordinates, setCoordinates] = useState();
    const { user } = useUser();
    const [loader, setLoader] = useState(false);


    const router = useRouter();


    async function nextHandler() {
        setLoader(true);


        const { data, error } = await supabase
            .from('listing')
            .insert([
                {
                    address: selectedAddress.label,
                    coordinates: coordinates,
                    createdBy: user?.primaryEmailAddress.emailAddress
                },
            ])
            .select()

        console.log(coordinates)

        if (data) {
            setLoader(false);
            console.log('New Data Added', data)
            toast('Nova adresa dodana')
            router.replace('/edit-listing/' + data[0].id)

        }
        if (error) {
            setLoader(false);
            console.log(error)
        }

    }
    return (

        <div className='mt-10 md:mx-56 lg:mx-80'>

            <div className='p-10 flex flex-col gap-5 items-center justify-center'>
                <h2 className='font-bold text-2xl'>Dodaj novi oglas</h2>
                <div className='p-10 rounded-lg shadow-md border flex flex-col  gap-5 w-full'>
                    <h2 className='text-gray-500'>Unesi adresu tvoje nekretnine</h2>
                    <GoogleAddressSearch
                        selectedAddress={(value) => setSelectedAddress(value)}
                        setCoordinates={(value) => setCoordinates(value)}

                    />
                    <Button
                        disabled={!selectedAddress || !coordinates || loader}
                        onClick={nextHandler}
                    >{loader ? <Loader className='animate-spin' /> : "Dalje"}</Button>

                </div>

            </div>

        </div>
    )
}

export default AddNewListing