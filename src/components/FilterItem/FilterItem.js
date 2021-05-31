import React from 'react'
import { FilterItemContainer, FilterButton, FilterButtonClose } from './FilterItemStyles/FilterItemStyles'

export default function FilterItem({ filter, filters, setFilters, fieldName }) {

    //console.log('filters', filters)

    function handleRemoveFilter(filterValue, filterFieldName){
        const filter = filterValue
        const filterField =  filterFieldName
        const currentLanguages = filters.languages
        const currentTools = filters.tools

        if(filterField === 'role') {

            setFilters(currentFilters => {
                delete currentFilters.role 
                return { ...currentFilters }
            })
        } else if (filterField === 'level') {

            setFilters(currentFilters => {
                delete currentFilters.level 
                return { ...currentFilters }
            })
        } else if (currentLanguages !== undefined && currentLanguages.includes(filter)) {
            setFilters(currentFilters => {

                const updatedLanguages = currentFilters.languages !== undefined ? currentFilters.languages.filter( lang => lang !== filter) : []
                //console.log('updatedLanguages = ', updatedLanguages)
                if(updatedLanguages.length === 0) {
                    delete currentFilters.languages 
                    return Object.assign({}, currentFilters)
                } else {
                    return { ...currentFilters, "languages": updatedLanguages} 
                }
                


            })
        }  else if (currentTools !== undefined && currentTools.includes(filter)) {
            setFilters(currentFilters => {

                const updatedTools = currentFilters.tools !== undefined ? currentFilters.tools.filter( tool => tool !== filter) : []

                
                if(updatedTools.length === 0) {
                    delete currentFilters.tools 
                    return Object.assign({}, currentFilters)
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
