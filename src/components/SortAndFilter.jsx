import SortBy from "./SortBy"
import {useState} from 'react'
import FiltersModal from './FiltersModal'
import {ChevronDownIcon} from '@chakra-ui/icons'


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
      <div className="open-filters" onClick={openFilters}>
      <p>Filters</p>
      <ChevronDownIcon color='blue' boxSize='25' transition='all 100ms linear' transform={isFilterActive ? 'rotate(-180deg)' : null}/>
      </div>
      <p>Currently viewing: {activeFilter}</p>
      <SortBy setSearchParams={setSearchParams}/>
      {isFilterActive ? <FiltersModal setActiveFilter={setActiveFilter} setSearchParams={setSearchParams} setIsFilterActive={setIsFilterActive}/> : null}
      </div>
    )
}

export default SortAndFilter