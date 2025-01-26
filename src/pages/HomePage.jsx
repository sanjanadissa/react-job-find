import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListing isHome= {true} />
    <ViewAllJobs />
  
    </>
  )
}

export default HomePage