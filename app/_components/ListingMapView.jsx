'use client'

import React, { useEffect, useState } from 'react'
import Listing from './Listing'
import { supabase } from '@/utils/supabase/client'

function ListingMapView({ type }) {
    const [listing, setListing] = useState([]);
    const [searchedAddress, setSearchedAddress] = useState();

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

            setListing(data)
    }

    async function handleSearchClick() {
        console.log(searchedAddress)
        const searchTerm = searchedAddress?.value?.structured_formatting?.main_text;

        const { data, error } = await supabase
            .from('listing')
            .select(`*,listingImages(
        url,
        listing_id)`)
            .eq('active', true)
            .eq('type', type)
            .like('address', '%' + searchTerm + '%')
            .order('id', { ascending: false })


        if (data) {
            setListing(data)
        }
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>

            <div><Listing listing={listing} handleSearchClick={handleSearchClick} searchedAddress={(v) => setSearchedAddress(v)} /></div>
            <div>Map</div>
        </div>
    )
}

export default ListingMapView