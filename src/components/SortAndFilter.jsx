import SortBy from "./SortBy"
import {useState} from 'react'
import FiltersModal from './FiltersModal'
import {useParams} from 'react-router-dom'

const SortAndFilter = ({setSearchParams}) => {
    const [isFilterActive, setIsFilterActive] = useState(false)
    const {topic_slug} = useParams()

    const openFilters = (event) => {
        event.preventDefault()
        setIsFilterActive(() => {
          return !isFilterActive
        })
      }
    return (
        <div className="sort-and-filter">
      <button className="filters-button" onClick={openFilters}>Filters</button>
      {topic_slug ? <p>Currently viewing: {topic_slug}</p> : null}
      <SortBy setSearchParams={setSearchParams}/>
      {isFilterActive ? <FiltersModal setIsFilterActive={setIsFilterActive}/> : null}
      </div>
    )
}

export default SortAndFilter