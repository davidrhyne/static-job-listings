import React from 'react'
// import { v4 as uuidv4 } from 'uuid';
import { FilterItemContainer, FilterButton, FilterButtonClose } from './FilterItemStyles/FilterItemStyles'

export default function FilterItem({ filter, filters, setFilters, fieldName }) {

//    console.log(uuidv4())

    function handleRemoveFilter(e){
        const filter = e.target.textContent
        const filterField =  e.target.className
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

                const updatedLanguages = currentFilters.languages !== undefined ? currentFilters.languages.filter( lang => lang !== filter) : undefined

                return { ...currentFilters, "languages": updatedLanguages} 


            })
        }  else if (currentTools !== undefined && currentTools.includes(filter)) {
            setFilters(currentFilters => {

                const updatedTools = currentFilters.tools !== undefined ? currentFilters.tools.filter( tool => tool !== filter) : undefined

                return { ...currentFilters, "tools": updatedTools} 


            })
        }
    }

    return (
        <FilterItemContainer >
            <FilterButton key={filter} className={fieldName} onClick={handleRemoveFilter}>                
                {filter}
            </FilterButton> 
            <FilterButtonClose>X</FilterButtonClose>

        </FilterItemContainer>

    )
}
