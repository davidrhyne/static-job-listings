import React from 'react'
import JobPost from '../JobPost/JobPost'
import { JobListingContainer } from './styles/JobListingStyles'


export default function Jobs({ jobs, filters, setFilters }) {
    return (
        <JobListingContainer>
            {jobs.map(job => <JobPost job={job} filters={filters} setFilters={setFilters} />)}
        </JobListingContainer>
    )
}
