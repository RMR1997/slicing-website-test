import React from 'react'

export default function DashboardDescription(props) {
    const {title, children,margin,size,textColor} = props;
    return (
          <>
          <div className='px-5 py-4'>
              <h1 className={`text-5xl font-bold ${textColor} mb-5`}> {title}
              </h1>
              <p className={`mt-1 text-1xl text-black ${size} ${margin}`}> {children}</p>
         
          </div>
         
          </>
    )
}
