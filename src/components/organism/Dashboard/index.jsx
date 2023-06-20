import React from 'react'
import DashboardDescription from '../../molecules/DashboardDesc'
import Image from '../../atom/Image'
import Button from '../../atom/Button'


export default function Dashboard() {
  return (
    <>
      <div id='dashboard' className='flex relative items-center justify-center'>
        <div className='flex bg-[#fff0e9] w-full h-full pb-32 pt-28  gap-7'>
          <div className='ml-48 mt-10 p-4'>
            <DashboardDescription margin="mt-10 p-4 " textColor=" p-6 text-[#e95756]" title="All Fast Food is"> <h1 className='p-4 text-5xl font-bold mb-10 text-[#e95756]'>Available at Foodle </h1> <p className='p-4 w-80'>we are just to click away when ypu crave for delicious fast food</p>
              <Button color="bg-[#e95756]" >Buy Now</Button>
            </DashboardDescription>
          </div>
          <Image size="w-1/3 " align="flex ml-28" image="public/images/fastfood.png"></Image>
        </div>

        <div className='flex w-3/4 h-52 p-2 gap-4 shadow-2xl bg-white rounded-2xl absolute bottom-[-80px] items-center justify-between  '>
          <div className='flex w-1/3 rounded-2xl items-center justify-center p-2 '>
          <div className=' flex w-1/2 mx-4 rounded-full relative w-20 h-20 bg-white shadow-slate-400 shadow-2xl '>
            <Image size="w-28 " align="flex" image="public/images/fast-delivery.png"></Image>
          </div>
          <div className='w-1/2'>
          <DashboardDescription title="Fast Delivery" textColor=" p-2 text-xl"><p className='p-2  text-gray-400 text-xs'>The Food Will be delivered to your home within 1-2 hours of you ordering</p></DashboardDescription>
          </div>
          </div>
         
          <div className='flex w-1/3 rounded-xl items-center justify-center p-2 '>
          <div className=' flex w-1/2 mx-4 rounded-full relative w-20 h-20 bg-white  shadow-slate-400 shadow-2xl '>
            <Image size="w-28 " align="flex" image="public/images/fresh.png"></Image>
          </div>
          <div className='w-1/2'>
          <DashboardDescription title="Fresh Food" textColor=" p-2 text-xl"><p className='p-2  text-gray-400 text-xs'>The Food Will be delivered to your home within 1-2 hours of you ordering</p></DashboardDescription>
          </div>
          </div>
          <div className='flex w-1/3 rounded-2xl items-center justify-center mr-8 p-2 '>
          <div className=' flex w-1/2 mx-4 rounded-full relative w-20 h-20 bg-white shadow-slate-400 shadow-2xl'>
            <Image size="w-28 " align="flex" image="public/images/free-shipping.png"></Image>
          </div>
          <div className='w-1/2 '>
          <DashboardDescription title="Free Delivery" textColor=" p-2 text-xl"><p className=' p-2 text-gray-400 text-xs'>The Food Will be delivered to your home within 1-2 hours of you ordering</p></DashboardDescription>
          </div>
          </div>
        </div>
      </div>




    </>

  )
}
