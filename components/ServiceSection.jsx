import { ArrowRight, AudioLines, DiscAlbum, MessageCircleCode, ScanSearch } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const services = [
  {
  "title": "Social Evaluation Raters",
  "icon":<MessageCircleCode size={40} />,
  "description": "VAs can tackle everyday administrative burdens, including scheduling appointments, managing email..."
  },
  {
  "title": "Social Media Raters",
  "icon":<DiscAlbum size={40} />,

  "description": "VAs can provide excellent customer service through email, phone, or live chat. They can answer quest..."
  },
  {
  "title": "Ad Quality Raters",
  "icon":<AudioLines size={40} />,

  "description": "If you struggle to create engaging content for your website or social media, a VA can help. They ..."
  },
  {
  "title": "Map Search Raters",
  "icon":<ScanSearch size={40}/>,

  "description": "Keeping track of data can be a time-consuming task. VAs can handle data entry, manage spreadsheets, ..."
  }]

const ServiceSection = () => {
  return (
    <div>
    <div className="p-8 flex flex-col items-center justify-center py-2 bg-sky-50 Md:px-44">
    {/* <h2 className="text-3xl text-center text-gray-800 pb-8">We are an internationally diversed team of remote freelancer raters who have a robost experience working as:</h2> */}

    <div className="grid md:grid-cols-4 gap-4">

 {  services.map((item, index)=>{
  return <div className="flex  flex-col gap-2 bg-sky p-6 justify-center items-center rounded-md shadow-md shadow-black">
      <div className='p-4 rounded-full border-2 border-slate-0 bg-sky-950 text-slate-200'>

      {item.icon}
      </div>

      <p className='text-black font-bold text-lg '>{item.title}</p>
      <p className='text-center text-gray-700'>{item.description}</p>
      <p className='flex items-center font-medium cursor-pointer hover:text-orange-500 text-black'>Learn more <ArrowRight size={15}></ArrowRight></p>
    </div>
 }) }
    </div>
    {/* <h2 className="text-3xl text-center text-gray-800 pt-8 max-w-5xl">We are available to be hired for outsourced jobs in these aformentioned roles and are happy to deliver the rating tasks on your behalf.</h2> */}
</div>
  </div>
  )
}

export default ServiceSection