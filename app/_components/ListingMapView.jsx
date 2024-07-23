'use client'

import React, { useEffect, useState } from 'react'
import Listing from './Listing'
import { supabase } from '@/utils/supabase/client'

function ListingMapView({ type }) {
    const [listing, setListing] = useState([]);

    useEffect(() => {
        getLatestListing()

    }, [])

    async function getLatestListing() {


        const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(
            url,
            listing_id)`)
            .eq('active', true)
            .eq('type', type)
            .order('id', { ascending: false })

        if (data)
            console.log(data)
        setListing(data)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>

            <div><Listing listing={listing} /></div>
            <div>Map</div>
        </div>
    )
}

export default ListingMapView