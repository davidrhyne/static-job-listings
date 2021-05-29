import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import { v4 as uuidv4 } from 'uuid';

export default function FilterList({ filters, setFilters }) {
    //console.log(filters)
    return (
        <div>
            { Object.entries(filters).map(filter => {     
                const fieldName = filter[0]           
                if(Array.isArray(filter[1])) {
                    return filter[1].map(filter => <FilterItem key={uuidv4()} filters={filters} filter={filter} setFilters={setFilters} fieldName={fieldName}/>)
                }
                return <FilterItem key={uuidv4()} filters={filters} filter={filter[1]} setFilters={setFilters} fieldName={fieldName}/>
            } ) }
        </div>
    )
}
