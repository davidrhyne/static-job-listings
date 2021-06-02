import React from 'react'
import { FilterItemContainer, FilterButton, FilterButtonClose } from './FilterItemStyles/FilterItemStyles'

export default function FilterItem({ filter, filters, setFilters, fieldName }) {

    function handleRemoveFilter(filterValue, filterFieldName){
        const filter = filterValue
        const filterField =  filterFieldName
        const currentLanguages = filters.languages
        const currentTools = filters.tools

        if(filterField === 'role') {
            // there is only one role, so it is okay to delete when it is being removed
            setFilters(currentFilters => {
                delete currentFilters.role 
                // return the remaining filters, if they exist
                return { ...currentFilters }
            })
        } else if (filterField === 'level') {
            // there is only one level, so it is okay to delete when it is being removed
            setFilters(currentFilters => {
                delete currentFilters.level 
                return { ...currentFilters }
            })
        } else if (currentLanguages !== undefined && currentLanguages.includes(filter)) {
            setFilters(currentFilters => {
                // there can be 0 to many languages, so remove the one that was selected with filter method
                // return empty array if there are no languages so that updatedLanguages.length check will not error out
                const updatedLanguages = currentFilters.languages !== undefined ? currentFilters.languages.filter( lang => lang !== filter) : []
    
                if(updatedLanguages.length === 0) {
                    delete currentFilters.languages 
                    return { ...currentFilters }
                } else {
                    return { ...currentFilters, "languages": updatedLanguages} 
                }
            })
        }  else if (currentTools !== undefined && currentTools.includes(filter)) {
            setFilters(currentFilters => {
                const updatedTools = currentFilters.tools !== undefined ? currentFilters.tools.filter( tool => tool !== filter) : []
                if(updatedTools.length === 0) {
                    delete currentFilters.tools 
                    return { ...currentFilters }
                } else {
                    return { ...currentFilters, "tools": updatedTools} 
                }
            })
        }
    }

    return (
        <FilterItemContainer >
            <FilterButton key={filter} onClick={() => handleRemoveFilter(filter, fieldName)}>                
                {filter}
            </FilterButton> 
            <FilterButtonClose onClick={() => handleRemoveFilter(filter, fieldName)}>X</FilterButtonClose>
        </FilterItemContainer>
    )
}
