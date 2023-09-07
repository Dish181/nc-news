import {useState, useEffect} from 'react'
import { getTopics } from '../../api'
import {Link} from 'react-router-dom'

const FiltersModal = ({setIsFilterActive}) => {
const [topics, setTopics] = useState([])

useEffect(() => {
    getTopics()
    .then((topics) => {
        setTopics(topics)
    })
}, [])

  return (
    <div className='filters'>
        <h2>Filter by topic:</h2>
        <Link to='/' onClick={() => {setIsFilterActive(false)}}><button>all</button></Link>
        {topics.map((topic) => {
            return (
                <Link onClick={() => {setIsFilterActive(false)}} key={topic.slug} to={`/${topic.slug}`}><button>{topic.slug}</button></Link>
            )
        })}
    </div>
  )
}

export default FiltersModal