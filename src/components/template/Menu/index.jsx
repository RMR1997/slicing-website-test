import React from 'react'
import DashboardDescription from '../../molecules/DashboardDesc'
import Button from '../../atom/Button'
import CardMenu from '../../organism/CardMenu'

const data = [
    {
        id: 1,
        title: 'Beef Burger',
        desc: '☆☆☆☆☆',
        image: '/images/beefburger.png',
        price: '$2'
    },
    {
        id: 2,
        title: 'Sandwich',
        desc: '☆☆☆☆☆',
        image: '/images/Sandwittch2.png',
        price: '$1.5'
    },
    {
        id: 3,
        title: 'French Fries',
        desc: '☆☆☆☆☆',
        image: '/images/frenchfries.png',
        price: '$1'
    },
    {
        id: 4,
        title: 'Hot Dog',
        desc: '☆☆☆☆☆',
        image: '/images/hotdog.png',
        price: '$2'
    },
    {
        id: 6,
        title: 'Sandwich',
        desc: '☆☆☆☆☆',
        image: '/images/Sandwittch2.png',
        price: '$1.5'
    },
    {
        id: 6,
        title: 'French Fries',
        desc: '☆☆☆☆☆',
        image: '/images/frenchfries.png',
        price: '$1'
    },
   
]

export default function Menu() {
    return (
        <>
            <div id='categories' className='flex pt-36 px-32'>
                <div className='w-2/3 p-2 items-center justify-center '>
                    <DashboardDescription margin="mt-10 " textColor="text-[#e95756]"> <h1 className='p-4 text-5xl font-bold'>Our <span className='p-1 text-[#e95756]'>Regular</span> Menu</h1>
                    </DashboardDescription>
                </div>
            </div>
            <div className='flex justify-between mx-32'>
                <div className='w-2/3 p-2 items-center'>
                    <DashboardDescription margin="mt-10 p-2 " textColor="text-[#e95756]"> <h1 className='p-4 w-96'>These Are Our Regular Menus. You Can Order Anything You Like</h1>
                    </DashboardDescription>

                </div>
                <div className='w-1/3 flex justify-end pr-10 flex-row gap-5 '>
                    <Button color="bg-[#e95756] hover:bg-red-700">Foods</Button>
                    <Button color="bg-[#e95756] hover:bg-red-700">Drinks</Button>
                    <Button color="bg-[#e95756] hover:bg-red-700">See All</Button>
                </div>
            </div>

            <div className='m-5 flex justify-center items-center text-justify w-full pt-20 '>
                <div className='p-4 grid grid-cols-3 gap-32'>
                    {data.map((product) => (

                        <CardMenu keys={product.id}>
                            <CardMenu.Header image={product.image}></CardMenu.Header>
                            <CardMenu.Body title={product.title}>{product.desc}</CardMenu.Body>
                            <CardMenu.Footer price={product.price}></CardMenu.Footer>

                        </CardMenu>

                    ))}
                </div>

            </div>
            
        </>


 

    )
}
