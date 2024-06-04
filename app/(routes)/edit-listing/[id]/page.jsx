'use client'

import React from 'react'
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





function EditListing() {
    return (
        <div className='px-10 md:px-36 my-10 '>
            <h2 className='font-bold text-2xl'>Unesi detaljne podatke za tvoj oglas</h2>
            <Formik
                initialValues={{
                    type: "",
                    propertyType: "",
                }}
                onSubmit={(values) => {
                    console.log(values)
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
                                    <RadioGroup defaultValue="Prodaja" onValueChange={(v) => values.type = v}>
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
                                    <Select onValueChange={(e) => values.propertyType = e}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Izaberi" />
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

                                    <Input type='number' placeholder='Npr.2' name='sobe' onChange={handleChange} />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Kupatilo</h2>

                                    <Input type='number' placeholder='Npr.2' name='kupatilo' onChange={handleChange} />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Kvadratura</h2>

                                    <Input type='number' placeholder='Npr.150' name='kvadratura' onChange={handleChange} />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Parking</h2>

                                    <Input type='number' placeholder='Npr.2' name='parking' onChange={handleChange} />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Regija</h2>

                                    <Input type='number' placeholder='Npr.150' name='regija' onChange={handleChange} />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Cijena prodaje ($)</h2>

                                    <Input type='number' placeholder='75.000' name='cijenaProdaje' onChange={handleChange} />
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Cijena rente ($)</h2>

                                    <Input type='number' placeholder='200' name='cijenaRente' onChange={handleChange} />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-10'>
                                <div className='flex gap-2 flex-col'>
                                    <h2 className='text-gray-500'>Opis</h2>
                                    <Textarea placeholder='' desription='' />
                                </div>
                            </div>
                            <div className='flex gap-7 justify-end mt-10'>
                                <Button variant="outline" className='text-primary border-primary'>Otkazi</Button>
                                <Button>Sacuvaj i Objavi</Button>
                            </div>

                        </div>
                    </form>)}
            </Formik>
        </div>
    )
}

export default EditListing