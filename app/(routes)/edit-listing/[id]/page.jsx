'use client'

import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Formik } from 'formik';

import { supabase } from '@/utils/supabase/client';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';






function EditListing({ params }) {
    const [listing, setListing] = useState([]);

    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        user && verifyUser()
    }, [user])

    async function verifyUser() {
        const { data, error } = await supabase
            .from('listing')
            .select('*')
            .eq('createdBy', user?.primaryEmailAddress.emailAddress)
            .eq('id', params.id)

        if (data) {

            setListing(data[0])
        }

        if (data?.length <= 0) {
            router.replace('/')
        }
    }


    async function onSubmitHandler(formValue) {

        const { data, error } = await supabase
            .from('listing')
            .update(formValue)
            .eq('id', params.id)
            .select()

        if (data) {
            console.log(data)
            toast('Oglas je sacuvan i objavljen')
        }

    }


    return (
        <div className='px-10 md:px-36 my-10 '>
            <h2 className='font-bold text-2xl text-center'>Unesi detaljne podatke za tvoj oglas</h2>
            <Formik
                initialValues={{
                    type: '',
                    propertyType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                    onSubmitHandler(values)
                }}>
                {({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>



                        <div className='p-8 rounded-lg shadow-md'>
                            <div className='grid grid-cols-1 md:grid-cols-3'>

                                <div className='flex flex-col gap-2'>

                                    <h2 className='text-lg text-slate-500'>Prodaja ili iznajmljivanje?</h2>
                                    <RadioGroup defaultValue={listing?.type} onValueChange={(v) => values.type = v}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Prodaja" id="Prodaja" />
                                            <Label htmlFor="Prodaja">Prodaja</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Iznajmljivanje" id="Iznajmljivanje" />
                                            <Label htmlFor="Iznajmljivanje">Iznajmljivanje</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-lg text-slate-500'>Tip nekretnine</h2>
                                    <Select onValueChange={(e) => values.propertyType = e}
                                        name='propertyType'
                                        defaultValue={listing?.propertyType}

                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder='Izaberi' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Kuca">Kuca</SelectItem>
                                            <SelectItem value="Stan">Stan</SelectItem>
                                            <SelectItem value="Vila">Vila</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </div>

                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Sobe</h2>

                                    <Input type='number' placeholder='Npr.2' name='bedroom'
                                        onChange={handleChange}
                                        defaultValue={listing?.bedroom}
                                    />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Kupatilo</h2>

                                    <Input type='number' placeholder='Npr.2' name='bathroom' onChange={handleChange}
                                        defaultValue={listing?.bathroom}
                                    />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Kvadratura</h2>

                                    <Input type='number' placeholder='Npr.150' name='builtin' onChange={handleChange}
                                        defaultValue={listing?.builtin}
                                    />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Parking</h2>

                                    <Input type='number' placeholder='Npr.2' name='parking' onChange={handleChange}
                                        defaultValue={listing?.parking}
                                    />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Regija</h2>

                                    <Input type='number' placeholder='Npr.150' name='area' onChange={handleChange}
                                        defaultValue={listing?.area}
                                    />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Cijena prodaje ($)</h2>

                                    <Input type='number' placeholder='75.000' name='price' onChange={handleChange}
                                        defaultValue={listing?.price}
                                    />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Cijena rente ($)</h2>

                                    <Input type='number' placeholder='200' name='hoa' onChange={handleChange}
                                        defaultValue={listing?.hoa}
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-10'>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Opis</h2>
                                    <Textarea placeholder='Dodaj opis...' name='description' onChange={handleChange}
                                        defaultValue={listing?.description}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-7 justify-end mt-10'>
                                <Button variant="outline" className='text-primary border-primary'>Sacuvaj</Button>
                                <Button>Sacuvaj i Objavi</Button>
                            </div>

                        </div>
                    </form>)}
            </Formik>
        </div>
    )
}

export default EditListing