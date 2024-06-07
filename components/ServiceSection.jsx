import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const services = [
  {
  "title": "Administrative Tasks",
  "description": "VAs can tackle everyday administrative burdens, including scheduling appointments, managing email..."
  },
  {
  "title": "Customer Support",
  "description": "VAs can provide excellent customer service through email, phone, or live chat. They can answer quest..."
  },
  {
  "title": "Content Creation",
  "description": "If you struggle to create engaging content for your website or social media, a VA can help. They ..."
  },
  {
  "title": "Data Entry",
  "description": "Keeping track of data can be a time-consuming task. VAs can handle data entry, manage spreadsheets, ..."
  }]

const ServiceSection = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center py-16 bg-sky-100 Md:px-44">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 pb-8">Our Services</h2>

    <div className="grid md:grid-cols-4 gap-4">

 {  services.map((item, index)=>{
  return <div className="flex  flex-col gap-2 bg-gray-50 p-6 justify-center items-center rounded-md shadow-md">
      <div className='p-6 rounded-full bg-gray-200'>

      <Image src='/images/heroimage3.jpg' width={40} height={40} alt="ia"/>
      </div>

      <p className='text-black font-bold text-lg '>{item.title}</p>
      <p className='text-center text-gray-700'>{item.description}</p>
      <p className='flex items-center cursor-pointer hover:text-orange-500 text-black'>Learn more <ArrowRight size={15}></ArrowRight></p>
    </div>
 }) }
    </div>

  </div>
  )
}

export default ServiceSection