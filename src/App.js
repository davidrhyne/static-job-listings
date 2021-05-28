import React, { useState, useEffect } from 'react'
import './App.css';
import JobListing from './components/JobListing/JobListing'
import FilterList from './components/FilterList/FilterList'
import JobsData from '../src/data/data.json'

function App() {

  const [ jobs, setJobs ] = useState([])
  const [ filters, setFilters ] = useState({})

  // use hook to load the jobs when the component mounts
  useEffect(() => {
    setJobs(JobsData)

  }, [])

  // use hook to update the available jobs based on the filters
  useEffect(() => {

    setJobs(JobsData.filter(job => 
      // for each of these, the ternary checks if that portion of the filters exists
      // if it does, then apply the value in the filter, else apply true to skip that check
      (filters.role === undefined ? true : job.role === filters.role) && 
      (filters.level === undefined ? true : job.level === filters.level ) && 
      (filters.languages === undefined ? true : filters.languages.every( language => job.languages.indexOf(language) !== -1) ) &&
      (filters.tools === undefined ? true :filters.tools.every( tool => job.tools.indexOf(tool) !== -1)) ))
    
  }, [filters])
  

  return ( 
    <div>
      <div>hello</div>
      <FilterList filters={filters} setFilters={setFilters}/>
      <JobListing jobs={jobs} filters={filters} setFilters={setFilters}/>
    </div>
  );
}

export default App;