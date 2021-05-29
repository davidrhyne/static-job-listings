import React from 'react'


export default function JobPost({ job, filters, setFilters }) {

    function handleClick(e) {
        const filter = e.target.textContent
        const filterField = e.target.className
        // console.log('typeof filter = ', typeof filter)
        if(filterField === 'role' && filters.role !== filter) {
            setFilters({ ...filters, "role": filter })
        } else if(filterField === 'level' && filters.level !== filter) {
            setFilters({ ...filters, "level": filter })
        } else if(filterField === 'languages' && filters.languages === undefined ) {
            setFilters({ ...filters, "languages": [filter] })
        } else if(filterField === 'languages' && !filters.languages.includes(filter) ) {
            setFilters({ ...filters, ...filters.languages.push(filter) })
        } else if(filterField === 'tools' && filters.tools === undefined ) {
            setFilters({ ...filters, "tools": [filter] })
        } else if(filterField === 'tools' && !filters.tools.includes(filter)) {
            setFilters({ ...filters, ...filters.tools.push(filter) })
        } 
    }

    return (
        <div key={job.id}>
            <div>{job.id}</div>
            <div>{job.company}</div>
            <div>{job.logo}</div>
            <div>{job.new ? "true" : "false"}</div>
            <div>{job.feature ? "true" : "false"}</div>
            <div>{job.position}</div>
            <div className="role" onClick={handleClick}>{job.role}</div>
            <div className="level" onClick={handleClick}>{job.level}</div>
            <div>{job.postedAt}</div>
            <div>{job.contract}</div>
            <div>{job.location}</div>
            {job.languages.map(language => <div className="languages" onClick={handleClick}>{language}</div>)}
            {job.tools.map(tool => <div className="tools" onClick={handleClick}>{tool}</div>)}
            <br></br>
        </div>
    )
}
