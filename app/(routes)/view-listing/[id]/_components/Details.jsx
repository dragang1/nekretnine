import GoogleMapsSection from '@/app/_components/GoogleMapsSection'
import { Button } from '@/components/ui/button'
import { Bath, Bed, BedDouble, Car, Drill, Home, LandPlot, MapPin, ParkingCircle, Share } from 'lucide-react'
import React from 'react'
import AgentDetail from './AgentDetail'

function Details({ listingDetail }) {
    return listingDetail && (
        <div className=' my-6 flex flex-col gap-2'>
            <div className='flex flex-col justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl mb-5'>${listingDetail?.price}</h2>
                </div>
                <h2 className='text-gray-500  text-sm md:text-lg flex gap-2'><MapPin /> {listingDetail?.address}</h2>
                <Button className='flex gap-2 mt-2'><Share />Podijeli</Button>
            </div>
            <div className='mt-4'>
                <h2 className='font-bold text-xl md:text-2xl mb-2'>Karakteristike</h2>
                <div className='grid grid-cols-3 gap-2 '>
                    <h2 className=' flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Home className='p-1' />{listingDetail?.propertyType}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Drill className='p-1' />{listingDetail?.builtin}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><LandPlot className='p-1' />{listingDetail?.area}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><BedDouble className='p-1' />{listingDetail?.bedroom}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Bath className='p-1' />{listingDetail?.bathroom}</h2>
                    <h2 className='flex gap-2 justify-center items-center text-primary bg-gray-300 rounded-lg'><Car className='p-1' />{listingDetail?.parking}</h2>
                </div>
            </div>
            <div classname='mt-6 '>
                <h2 className='font-bold text-xl md:text-2xl'>Detaljnije</h2>
                <p classname='text-gray-600'>{listingDetail?.description}</p>
            </div>
            <div >
                <h2 className='font-bold text-xl md:text-2xl mb-2'>Pogledaj na mapi</h2>
                <GoogleMapsSection
                    coordinates={listingDetail?.coordinates}
                    listing={[listingDetail]}
                />
            </div>
            <div className='mt-6'>
                <h2 className='font-bold text-xl md:text-2xl'>Kontaktiraj Agenta</h2>
                <AgentDetail listingDetail={listingDetail} />
            </div>
        </div>
    )
}

export default Details