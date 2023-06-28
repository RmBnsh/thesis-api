import React from 'react'
import Carousel from '@/components/Carousel';
import ImageGrid from '@/components/ImageGrid';

const Services = () => {
  return (
        <>
         <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
            <Carousel />
        </div>

        <div className="mt-5">
        <ImageGrid />
        </div>
    </>
  )
}

export default Services