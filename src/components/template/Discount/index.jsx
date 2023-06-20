import React from 'react'
import Image from '../../atom/Image'
import Label from '../../atom/Label'

export default function DiscountBanner() {
  return (
    <>
      <div id='discount'  className='flex flex-row h-fit py-32 px-14' >
        <div className='relative w-2/4 bg-slate-900'>

          <Image image="/public/images/beefburger.png" size="w-full h-screen"></Image>
          <div className='flex absolute top-0 p-10 m-3 text-5xl justify-center  text-center'>
            <Label style="text-white"><p className='flex'>25%</p> <p>DISCOUNT</p></Label>
          </div>

        </div>

        <div className='flex flex-col w-2/4 bg-green-800 '>
          <div className='relative w-full h-1/2 bg-orange-700 items-center justify-center flex '>
            <Image size="w-1/2 h-full" image="/public/images/frenchfries.png">
            </Image>
            <div className='flex absolute top-0 text-5xl right-0 p-10 m-3'>
              <Label style="text-white"><p className='flex'>SAVE</p> <p>20%</p></Label>
            </div>
          </div>
          <div className='relative w-full h-1/2 bg-yellow-600 items-center justify-center flex'>
            <Image size="w-1/2 h-full" image="/public/images/hotdog.png" ></Image>
            <div className='flex absolute top-0 text-5xl right-0 p-10 m-3'>
              <Label style="text-white"><p className='flex'>15%</p> <p>OFF</p></Label>
            </div>
          </div>

        </div>
      </div>


    </>

  )
}
