import React from 'react'
import DashboardDescription from '../../molecules/DashboardDesc'
import Image from '../../atom/Image'

export default function Categories() {
  return (
    <>
    <div id='categories' className='flex pt-36 px-32'>
        <div className='w-2/3 items-center justify-center '>
        <DashboardDescription  margin="mt-10 " textColor="text-[#e95756]"> <h1 className='text-5xl font-bold p-2'>BEST <span className='text-[#e95756]'>DELIVERED</span></h1><h1 className='text-5xl font-bold mb-10 mr-24 text-black'>Categories </h1>
    </DashboardDescription>
        </div>
    <div className='ml-32 w-96 h-48 justify-end p-10'>
    <p>Here Are Some of Our Best Distributed Categories. If You Want You Can Order From Here.</p>
    </div>
    </div>
    <div className='flex flwx-row gap-15 w-full  '> 
    <div className='w-screen text-center'>
    <Image image="public/images/beefburger.png"></Image>
    <DashboardDescription title="Beef Burger"><p className='text-[#e95756] font-bold text-2xl hover:text-red-900' >Order Now ></p></DashboardDescription>
    </div>

    <div className='w-screen text-center'>
    <Image image="public/images/sandwittch2.png"></Image>
    <DashboardDescription title="Sandwich"><p className='text-[#e95756] font-bold text-2xl hover:text-red-900'> Order Now ></p></DashboardDescription>
    </div>

    <div className='w-screen text-center'>
    <Image image="public/images/frenchfries.png"></Image>
    <DashboardDescription title="French Fries"><p className='text-[#e95756] font-bold text-2xl hover:text-red-900'>Order Now ></p></DashboardDescription>
    </div>
    </div>
    </>
   
  )
}
