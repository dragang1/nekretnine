import { Bath, BedDouble, MapPin, Ruler } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function MarkerItemListing({ item }) {
    return (
        <div className='p-3 hover:border hover:border-primary cursor-pointer rounded-lg' key={item.id} >
            <Image src={item.listingImages[0].url}
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
        </div>
    )
}

export default MarkerItemListing