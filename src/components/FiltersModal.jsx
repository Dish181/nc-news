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
    setActiveFilter(event.target.id)
    setSearchParams((searchParams) => {
        searchParams.delete('topic')
        if (event.target.id) {
            searchParams.append('topic', event.target.id)
        }
        return searchParams
    })
}

  return (
    <div className='filters'>
        <h2>Filter by topic:</h2>
        <button>all</button>
        {topics.map((topic) => {
            return (
                <button key={topic.slug} id={topic.slug} onClick={handleFilter}>{topic.slug}</button>
            )
        })}
    </div>
  )
}

export default FiltersModal