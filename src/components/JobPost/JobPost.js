import React from 'react'
import { 
    JobPostContainer, 
    JobPostCompanyWrapper, 
    JobPostImage,  
    JobPostCenterWrapper,
    JobPostCompany,
    JobPostNewPost,
    JobPostFeatured,
    JobPostPosition,
    JobPostDetails,
    JobPostDetail,
    BulletPoint,
    HorizontalRule,
    JobPostFilterContainer,
    JobPostFilterButton
} from './styles/JobPostStyles'

export default function JobPost({ job, filters, setFilters }) {

    function handleAddFilter(filterValue, filterFieldName){


        const filter = filterValue
        const filterField =  filterFieldName


        if(filterField === 'role' && filters.role !== filter) {
            setFilters({ ...filters, "role": filter })
        } else if(filterField === 'level' && filters.level !== filter) {
            setFilters({ ...filters, "level": filter })
        } else if(filterField === 'languages' && filters.languages === undefined ) {
            setFilters({ ...filters, "languages": [filter] })
            console.log('after filters = ', filters )
        } else if(filterField === 'languages' && !filters.languages.includes(filter) ) {
            setFilters({ ...filters, ...filters.languages.push(filter) })
            console.log('after filters = ', filters )
        } else if(filterField === 'tools' && filters.tools === undefined ) {
            setFilters({ ...filters, "tools": [filter] })
        } else if(filterField === 'tools' && !filters.tools.includes(filter)) {
            setFilters({ ...filters, ...filters.tools.push(filter) })
        } 

    }

    return (
        <JobPostContainer key={job.id} featured={job.featured}>
            <JobPostImage imagePath={job.logo} /> 
            <JobPostCenterWrapper>
                <JobPostCompanyWrapper>
                    <JobPostCompany>{job.company}</JobPostCompany>
                    <JobPostNewPost hidden={job.new ? false : true}>{job.new ? "NEW!" : null}</JobPostNewPost>
                    <JobPostFeatured hidden={job.featured ? false : true}>{job.featured ? "FEATURED" : null}</JobPostFeatured>
                </JobPostCompanyWrapper>
                <JobPostPosition>{job.position}</JobPostPosition>
                <JobPostDetails>
                    <JobPostDetail>{job.postedAt}</JobPostDetail>
                    <BulletPoint>{'\u2022'}</BulletPoint>
                    <JobPostDetail>{job.contract}</JobPostDetail>
                    <BulletPoint>{'\u2022'}</BulletPoint>
                    <JobPostDetail>{job.location}</JobPostDetail>
                </JobPostDetails>
                <HorizontalRule />
            </JobPostCenterWrapper>
            <JobPostFilterContainer>
                <JobPostFilterButton onClick={() => handleAddFilter(job.role, "role")}>{job.role}</JobPostFilterButton>
                <JobPostFilterButton onClick={() => handleAddFilter(job.level, "level")}>{job.level}</JobPostFilterButton>

                {job.languages.map(language => <JobPostFilterButton onClick={() => handleAddFilter(language, "languages")}>{language}</JobPostFilterButton>)}
                {job.tools.map(tool => <JobPostFilterButton onClick={() => handleAddFilter(tool, "tools")}>{tool}</JobPostFilterButton>)}
            </JobPostFilterContainer>
            <br></br>
        </JobPostContainer>
    )
}
