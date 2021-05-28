import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function FilterItem({ filter, filters, setFilters, fieldName }) {

//    console.log(uuidv4())

    function handleRemoveFilter(e){
        const filter = e.target.textContent
        const filterField =  e.target.className
        const currentLanguages = filters.languages
        console.log('currentLanguages = ', currentLanguages)

        if(filterField === 'role') {
            console.log('updating roles ')
            setFilters(currentFilters => {
                delete currentFilters.role 
                return { ...currentFilters }
            })
        } else if (filterField === 'level') {
            console.log('updating levels ')
            setFilters(currentFilters => {
                delete currentFilters.level 
                return { ...currentFilters }
            })
        } else if (currentLanguages !== undefined && currentLanguages.includes(filter)) {
            setFilters(currentFilters => {
                console.log('updating languages ')
                // console.log("current languages = ", currentFilters.languages )
                // console.log("length = ", currentFilters.languages.length)
                //const arrayLength =  currentFilters.languages.length
                //console.log('arrayLength = ', arrayLength)
                //return { ...currentFilters}
                // if (arrayLength === 1) {
                //     delete currentFilters.languages 
                //     return { ...currentFilters }
                // } else {
                //     const updatedLanguages = currentFilters.languages.filter( lang => lang !== filter)
                //     delete currentFilters.languages 
                //     return { ...currentFilters, "languages": updatedLanguages}
                // }
                console.log('currentFilters.languages = ', currentFilters.languages)
                const updatedLanguages = currentFilters.languages !== undefined ? currentFilters.languages.filter( lang => lang !== filter) : undefined
                console.log('before updatedLanguages = ', updatedLanguages)
                //delete currentFilters.languages 
                console.log('after updatedLanguages = ', updatedLanguages)
                return { ...currentFilters, "languages": updatedLanguages} 


            })
        } 
    }

    return (
        <div >
            <div key={filter} className={fieldName} onClick={handleRemoveFilter}>{filter}</div>        
        </div>
    )
}
