import { ArrowRight, AudioLines, DiscAlbum, Loader, MessageCircleCode, ScanSearch } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const services = [
  {
  "title": "Search Evaluation Raters",
  "icon":<MessageCircleCode size={40} />,
  "key1": "Search Results Evaluation",
  "key2": "Search Quries Evaluation",
  "key3": "Search Quality Evaluation",
  },
  {
  "title": "Social Media Raters",
  "icon":<DiscAlbum size={40} />,

  "key1": "Content Review",
  "key2": "Content Quality",
  "key3": "Content Relevance",
  },
  {
  "title": "Ad Quality Raters",
  "icon":<AudioLines size={40} />,

  "key1": "Ads Review",
  "key2": "Ads Ratings",
  "key3": "Ads Relevance",
  },
  {
  "title": "Map Search Raters",
  "icon":<ScanSearch size={40}/>,

  "key1": "Map Search Evaluation",
  "key2": "Map Search Queries",
  "key3": "Map Search Relevance",
  }]

const ServiceSection = () => {
  return (
    <div>
    <div className="p-8 flex flex-col items-center justify-center py-2 bg-sky-200 Md:px-44">
    {/* <h2 className="text-3xl text-center text-gray-800 pb-8">We are an internationally diversed team of remote freelancer raters who have a robost experience working as:</h2> */}

    <div className="grid md:grid-cols-4 gap-4">

 {  services.map((item, index)=>{
  return <div className="flex  flex-col gap-2 bg-sky p-8 justify-center items-center rounded-md shadow-md shadow-black">
      <div className='p-4 rounded-full border-2 border-slate-0 bg-slate-900 text-slate-200'>

      {item.icon}
      </div>

      <p className='text-black font-bold text-lg '>{item.title}</p>
      <p className='text-center text-gray-700 flex gap-1 items-center'> <Loader size={15} className='text-orange-500 font-bold' /> {item.key1}</p>
      <p className='text-center text-gray-700 flex gap-1 items-center '><Loader size={15} className='text-orange-500'/> {item.key2}</p>
      <p className='text-center text-gray-700 flex gap-1 items-center '> <Loader size={15} className='text-orange-500' />{item.key3}</p>
      {/* <p className='flex items-center font-medium cursor-pointer hover:text-orange-500 text-black'>Learn more <ArrowRight size={15}></ArrowRight></p> */}
    </div>
 }) }
    </div>
    {/* <h2 className="text-3xl text-center text-gray-800 pt-8 max-w-5xl">We are available to be hired for outsourced jobs in these aformentioned roles and are happy to deliver the rating tasks on your behalf.</h2> */}
</div>
  </div>
  )
}

export default ServiceSection