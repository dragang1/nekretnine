import { Button } from '@/components/ui/button'
import { Bath, BedDouble, MapPin, Ruler, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function MarkerItemListing({ item, closeHandler }) {
    return (
        <div className='bg-white  cursor-pointer rounded-lg w-[180px]' key={item.id} >
            <X onClick={() => closeHandler()} />
            <Image src={item.listingImages[0].url}
                width={800}
                height={150}
                alt='propertyImage'
                className='rounded-lg object-cover h-[120px] w-[180px]'

            />
            <div className='p-2 flex mt-2 flex-col gap-2'>
                <h2 className='font-bold text-xl'>${item?.price}</h2>
                <h3 className='flex gap-2 text-sm text-gray-500'><MapPin className='w-4 h-4' />{item?.address}</h3>
            </div>
            <div className='flex mt-2 gap-2  justify-center'>
                <h2 className='flex gap-2  text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><BedDouble className='h-4 w-4' />{item?.bedroom}</h2>
                <h2 className='flex gap-2 text-sm bg-slate-300 rounded-md p-2 text-gray-500 justify-center items-center'><Bath className='h-4 w-4' />{item?.bathroom}</h2>

            </div>
            <div className='flex justify-center p-3'>

                <Button size='sm'>Pogledaj</Button>
            </div>

        </div>
    )
}

export default MarkerItemListing