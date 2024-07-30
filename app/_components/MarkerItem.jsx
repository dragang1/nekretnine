import { MarkerF, OverlayView } from '@react-google-maps/api'
import React, { useState } from 'react'
import MarkerItemListing from './MarkerItemListing';

function MarkerItem({ item }) {
    const [selectedListing, setSelectedListing] = useState();


    return (
        <div>

            <MarkerF
                position={item.coordinates}


                onClick={() => setSelectedListing(item)}

            >
                {selectedListing &&
                    <OverlayView
                        position={selectedListing.coordinates}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <MarkerItemListing item={item} />
                    </OverlayView>
                }
            </MarkerF>


        </div>
    )
}

export default MarkerItem