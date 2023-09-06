import {useState, useEffect} from 'react'
import { getTopics } from '../../api'
import {Link} from 'react-router-dom'

const FiltersModal = ({setIsModalActive}) => {
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
        {topics.map((topic) => {
            return (
                <Link onClick={() => {setIsModalActive(false)}} key={topic.slug} to={`/${topic.slug}`}><button>{topic.slug}</button></Link>
            )
        })}
    </div>
  )
}

export default FiltersModal