import {ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'
import {useState} from 'react'

const SortBy = ({setSearchParams}) => {
    const [checked, setChecked] = useState('date')
    const [direction, setDirection] = useState('')

    const handleSort = (event) => {
        setSearchParams((searchParams) => {
            searchParams.delete('sort_by')
            searchParams.append('sort_by', event.target.value)
            return searchParams
        })}

    const handleDesc = (event) => {
        setSearchParams((searchParams) => {
            searchParams.delete('order')
            searchParams.append('order', 'desc')
            setDirection('desc')
            return searchParams
        })

    }

    const handleAsc = (event) => {
        setSearchParams((searchParams) => {
            searchParams.delete('order')
            searchParams.append('order', 'asc')
            setDirection('asc')
            return searchParams
        })
    }


    return (<div className="sort-by">
        <p>Sort by:</p>
        <div className="label-radio-container">
        <label className="sort-label" htmlFor="date">Date</label>
        <input name="sort" className="sort-radio" type="radio" id="date" value="created_at"onClick={handleSort} checked={checked === 'date'} onChange={() => {setChecked('date')}}></input>
        </div>
        <div className="label-radio-container">
        <label className="sort-label"  htmlFor="comment_count">Comment count</label>
        <input name="sort" type="radio" className="sort-radio" id="comment_count" value="comment_count" onClick={handleSort}  checked={checked === 'comment_count'} onChange={() => {setChecked('comment_count')}}></input>
        </div>
        <div className="label-radio-container">
        <label className="sort-label"  htmlFor="votes">Votes</label>
        <input name="sort" type="radio" className="sort-radio" id="votes" value="votes" onClick={handleSort} checked={checked === 'votes'} onChange={() => {setChecked('votes')}}></input>
        </div>
        <div className='arrows-container'>
        <ArrowDownIcon margin-left='1rem' boxSize={'25'} value='desc' onClick={handleDesc} color={direction === 'desc' ? 'blue' : 'black'} cursor='pointer' animation={direction === 'desc' ? 'shake 0.5s' : null} border={direction === 'desc' ? '1px solid blue' : null} />
        <ArrowUpIcon value='asc' onClick={handleAsc} color={direction === 'asc' ? 'blue' : 'black'} cursor='pointer' boxSize={'25'} border={direction === 'asc' ? '1px solid blue' : null} />
        
        </div>
    </div>
    )
}

export default SortBy