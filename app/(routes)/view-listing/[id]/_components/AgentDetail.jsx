import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function AgentDetail({ listingDetail }) {
    return (
        <div className='flex items-center justify-center gap-2 p-5 rounded-lg shadow-2xl border my-6 '>
            <div className='flex gap-4 justify-center items-center'>

                <Image
                    src={listingDetail?.profileImage}
                    width={60}
                    height={60}
                    alt='profile image'
                    className='rounded-full'


                />
                <div className='flex '>

                    <h2 className='text-lg font-bold' >{listingDetail?.userName}</h2>
                    <h2 className='text-gray-500 '>{listingDetail?.createdBy}</h2>
                </div>
                <Button>Posalji poruku</Button>
            </div>

        </div>
    )
}

export default AgentDetail