import React from 'react'
import Button from '../../atom/Button';
import { Link } from 'react-router-dom';

// NESTED COMPONENT

export default function CardProduct(props) {
    const {children} = props;
  return (
    <>
    <div className=' p-3 rounded-lg p-1 shadow-xl'>
        <div className='p-2 w-full max-w-xs bg-[#fff0e9] rounded-lg'> {children} </div>
    </div>
    </>
  )
}

const Header = (props) => {
    const {image} = props;
    return (
        <>
        <div className='relative ml-5 mb-3 w-52 h-40'>
        <div className='absolute top-[-70px] right-0 translate-x-16 bg-red-500 rounded-full'>
        <a href="#">
            <img src={image} alt="gambar" className='p-4 rounded-t-lg' />
        </a>
        </div>
       
        </div>
        
        </>
        
    )
}

const Body = (props) => {
    const {title, children} = props;
    return (
        <>
        <div className=' px-5 py-4'>
        <a href="#">
            <h5 className='p-2 mb-2 text-3xl font-bold text-slate-900'> {title}
            </h5>
            <p className='mt-1 text-black text-base'> {children}</p>
        </a>
        </div>
       
        </>
    )
}

const Footer = (props) => {
    const {price, children} = props;
    return (
        <>
        <div className='px-5 py-4 mt-2 flex flex-row text-center items-center justify-between'>
            
            <p className='pt-4 m-2 text-2xl font-semibold text-slate-900'> {price}
              </p>
              <Button color="bg-[#e95756] hover:bg-red-700"><Link to="/productDetail" className='text-white-500 font-bold'>Buy Now </Link></Button>
          
        </div>
        
      </>
    )
   
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;