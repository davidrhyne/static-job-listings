import React from 'react'
import JobPost from '../JobPost/JobPost'


export default function Jobs({ jobs, filters, setFilters }) {
    return (
        <div>
            {jobs.map(job => <JobPost job={job} filters={filters} setFilters={setFilters} />)}
        </div>
    )
}
