import { Button } from '@/components/ui/button'
import { Bath, Bed, BedDouble, Car, Drill, Home, LandPlot, MapPin, ParkingCircle, Share } from 'lucide-react'
import React from 'react'

function Details({ listingDetail }) {
    return listingDetail && (
        <div className='my-6 flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl'>${listingDetail?.price}</h2>
                    <h2 className='text-gray-500 text-lg flex gap-2'><MapPin /> {listingDetail?.address}</h2>
                </div>
                <Button className='flex gap-2'><Share />Podijeli</Button>
            </div>
            <div className='mt-4'>
                <h2 className='font-bold text-2xl'>Karakteristike</h2>
                <div className='grid grid-cols-3 gap-2 '>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Home />{listingDetail?.propertyType}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Drill />{listingDetail?.builtin}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><LandPlot />{listingDetail?.area}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><BedDouble />{listingDetail?.bedroom}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Bath />{listingDetail?.bathroom}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Car />{listingDetail?.parking}</h2>
                </div>
            </div>
            <div classname='mt-6'>
                <h2 className='font-bold text-2xl'>Detaljnije</h2>
                <p classname='text-gray-600'>{listingDetail?.description}</p>
            </div>
        </div>
    )
}

export default Details