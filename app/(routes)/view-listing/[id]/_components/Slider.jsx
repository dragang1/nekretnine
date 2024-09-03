import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


function Slider({ imageList }) {

    return (
        <div>
            {imageList ?

                <Carousel>
                    <CarouselContent>
                        {imageList.map((item, index) => (
                            <CarouselItem>
                                <Image
                                    src={item.url}
                                    width={800}
                                    height={300}
                                    alt="Listing-Images"
                                    className="rounded-xl object-cover h-[300px] w-full "
                                    key={item.id}

                                />
                            </CarouselItem>

                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> :
                <div className="w-full h-[200px] bg-slate-200 animate-pulse">


                </div>}
        </div>

    )
}

export default Slider