import {useState, useEffect} from 'react'
import { getTopics } from '../../api'


const FiltersModal = ({setIsFilterActive, setSearchParams, setActiveFilter}) => {
const [topics, setTopics] = useState([])

useEffect(() => {
    getTopics()
    .then((topics) => {
        setTopics(topics)
    })
}, [])

const handleFilter = (event) => {
    setIsFilterActive(false)
    setSearchParams((searchParams) => {
        searchParams.delete('topic')
        if (event.target.id) {
            searchParams.append('topic', event.target.id)
            setActiveFilter(event.target.id)
        } else {
            setActiveFilter('all')
        }
        return searchParams
    })
}

  return (
    <div className='filters'>
        <h2>Filter by topic:</h2>
        <div className='filter-buttons-container'>
        <button className='filter-button' onClick={handleFilter}>all</button>
        {topics.map((topic) => {
            return (
                <button className='filter-button' key={topic.slug} id={topic.slug} onClick={handleFilter}>{topic.slug}</button>
            )
        })}
        </div>
    </div>
  )
}

export default FiltersModal