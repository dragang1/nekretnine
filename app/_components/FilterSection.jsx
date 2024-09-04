import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bath, BedDouble, CarFront, } from 'lucide-react'


function FilterSection({ setBedCount, setBathCount, setParkingCount, setHomeType }) {
    return (
        <div className='px-3 py-2 grid grid-cols-2'>
            <Select onValueChange={setBedCount}  >
                <SelectTrigger className="w-[100px] md:w-[180px] ">
                    <SelectValue placeholder="Krevet" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="2">
                        <h2 className='flex justify-center items-center gap-2'><BedDouble className='h-4 w-4 text-primary' />2+</h2>
                    </SelectItem>
                    <SelectItem value="3">
                        <h2 className='flex justify-center items-center gap-2'><BedDouble className='h-4 w-4 text-primary' />3+</h2>
                    </SelectItem>
                    <SelectItem value="4">
                        <h2 className='flex justify-center items-center gap-2'><BedDouble className='h-4 w-4 text-primary' />4+</h2>
                    </SelectItem>
                    <SelectItem value="5">
                        <h2 className='flex justify-center items-center gap-2'><BedDouble className='h-4 w-4 text-primary' />5+</h2>
                    </SelectItem>

                </SelectContent>
            </Select>
            <Select onValueChange={setBathCount}>
                <SelectTrigger className="w-[100px] md:w-[180px] ">
                    <SelectValue placeholder="Kupatilo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="2">
                        <h2 className='flex justify-center items-center gap-2'><Bath className='h-4 w-4 text-primary' />2+</h2>
                    </SelectItem>
                    <SelectItem value="3">
                        <h2 className='flex justify-center items-center gap-2'><Bath className='h-4 w-4 text-primary' />3+</h2>
                    </SelectItem>
                    <SelectItem value="4">
                        <h2 className='flex justify-center items-center gap-2'><Bath className='h-4 w-4 text-primary' />4+</h2>
                    </SelectItem>
                    <SelectItem value="5">
                        <h2 className='flex justify-center items-center gap-2'><Bath className='h-4 w-4 text-primary' />5+</h2>
                    </SelectItem>

                </SelectContent>
            </Select>
            <Select onValueChange={setParkingCount}>
                <SelectTrigger className="w-[100px] md:w-[180px] ">
                    <SelectValue placeholder="Parking" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">
                        <h2 className='flex justify-center items-center gap-2'><CarFront className='h-4 w-4 text-primary' />1+</h2>
                    </SelectItem>
                    <SelectItem value="2">
                        <h2 className='flex justify-center items-center gap-2'><CarFront className='h-4 w-4 text-primary' />2+</h2>
                    </SelectItem>
                    <SelectItem value="3">
                        <h2 className='flex justify-center items-center gap-2'><CarFront className='h-4 w-4 text-primary' />3+</h2>
                    </SelectItem>
                    <SelectItem value="4">
                        <h2 className='flex justify-center items-center gap-2'><CarFront className='h-4 w-4 text-primary' />4+</h2>
                    </SelectItem>

                </SelectContent>
            </Select>
            <Select onValueChange={(value) => value === 'Svi' ? setHomeType(null) : setHomeType(value)}>
                <SelectTrigger className="w-[100px] md:w-[180px] ">
                    <SelectValue placeholder="Tip objekta" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Svi">
                        Svi

                    </SelectItem>
                    <SelectItem value="Kuca">
                        Kuca

                    </SelectItem>
                    <SelectItem value="Stan">
                        Stan

                    </SelectItem>
                    <SelectItem value="Vila">
                        Vila

                    </SelectItem>


                </SelectContent>
            </Select>

        </div>
    )
}

export default FilterSection