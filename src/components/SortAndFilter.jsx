import SortBy from "./SortBy"
import {useState} from 'react'
import FiltersModal from './FiltersModal'


const SortAndFilter = ({setSearchParams}) => {
    const [isFilterActive, setIsFilterActive] = useState(false)
    const [activeFilter, setActiveFilter] = useState('all')

    const openFilters = (event) => {
        event.preventDefault()
        setIsFilterActive(() => {
          return !isFilterActive
        })
      }
    return (
        <div className="sort-and-filter">
      <button className="filters-button" onClick={openFilters}>Filters</button>
      <p>Currently viewing: {activeFilter} articles</p>
      <SortBy setSearchParams={setSearchParams}/>
      {isFilterActive ? <FiltersModal setActiveFilter={setActiveFilter} setSearchParams={setSearchParams} setIsFilterActive={setIsFilterActive}/> : null}
      </div>
    )
}

export default SortAndFilter