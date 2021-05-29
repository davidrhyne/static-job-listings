import React from 'react'
// import { v4 as uuidv4 } from 'uuid';
import { FilterItemContainer } from './FilterItemStyles/FilterItemStyles'

export default function FilterItem({ filter, filters, setFilters, fieldName }) {

//    console.log(uuidv4())

    function handleRemoveFilter(e){
        const filter = e.target.textContent
        const filterField =  e.target.className
        const currentLanguages = filters.languages
        const currentTools = filters.tools
        // console.log('currentLanguages = ', currentLanguages)

        if(filterField === 'role') {
            // console.log('updating roles ')
            setFilters(currentFilters => {
                delete currentFilters.role 
                return { ...currentFilters }
            })
        } else if (filterField === 'level') {
            // console.log('updating levels ')
            setFilters(currentFilters => {
                delete currentFilters.level 
                return { ...currentFilters }
            })
        } else if (currentLanguages !== undefined && currentLanguages.includes(filter)) {
            setFilters(currentFilters => {
                // console.log('updating languages ')
                // console.log('currentFilters.languages = ', currentFilters.languages)
                const updatedLanguages = currentFilters.languages !== undefined ? currentFilters.languages.filter( lang => lang !== filter) : undefined
                // console.log('before updatedLanguages = ', updatedLanguages)
                //delete currentFilters.languages 
                // console.log('after updatedLanguages = ', updatedLanguages)
                return { ...currentFilters, "languages": updatedLanguages} 


            })
        }  else if (currentTools !== undefined && currentTools.includes(filter)) {
            setFilters(currentFilters => {
                // console.log('updating tools ')
                // console.log('currentFilters.tools = ', currentFilters.tools)
                const updatedTools = currentFilters.tools !== undefined ? currentFilters.tools.filter( tool => tool !== filter) : undefined
                // console.log('before updatedTools = ', updatedTools)
                //delete currentFilters.languages 
                // console.log('after updatedTools = ', updatedTools)
                return { ...currentFilters, "tools": updatedTools} 


            })
        }
    }

    return (
        <FilterItemContainer >
            <div key={filter} className={fieldName} onClick={handleRemoveFilter}>{filter}</div>        
        </FilterItemContainer>
    )
}
