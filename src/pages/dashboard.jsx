import React from 'react'
import Layout from '../components/organism/Layout'
import Dashboard from '../components/organism/Dashboard'
import Categories from '../components/template/Categories'
import Menu from '../components/template/Menu'
import DiscountBanner from '../components/template/Discount'



export default function DashboardPage() {
  return (
    <>
    <div className='font-AntiPasto'>
    <Layout type="logout">
        <Dashboard ></Dashboard>
        <Categories></Categories>
        <Menu></Menu>
        <DiscountBanner></DiscountBanner>
    </Layout>
    </div>
    
    </>
   
  )
}
