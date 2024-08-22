'use client'

import { UserButton, UserProfile } from '@clerk/nextjs'
import { Building2 } from 'lucide-react'
import React from 'react'
import UserListing from './_components/UserListing'

function User() {
    return (
        <div className='md:px-10 lg:px-32 w-full'>
            <h2 className='font-bold text-2xl'>Moj nalog</h2>
            <UserProfile routing="hash">
                <UserButton.UserProfilePage
                    label='Moji oglasi'
                    labelIcon={<Building2 className='w-5 h-5' />}
                    url='moj-oglas'
                >
                    <UserListing />
                </UserButton.UserProfilePage>
            </UserProfile>
        </div>
    )
}

export default User