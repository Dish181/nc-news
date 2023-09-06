import {ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'

const SortBy = ({setSearchParams}) => {

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
            return searchParams
        })

    }

    const handleAsc = (event) => {
        setSearchParams((searchParams) => {
            searchParams.delete('order')
            searchParams.append('order', 'asc')
            return searchParams
        })
    }


    return (<div className="sort-by">
        <p>Sort by:</p>
        <div className="label-radio-container">
        <label className="sort-label" htmlFor="date">Date</label>
        <input name="sort" className="sort-radio" type="radio" id="date" value="created_at"onClick={handleSort} defaultChecked ></input>
        </div>
        <div className="label-radio-container">
        <label className="sort-label"  htmlFor="comment_count">Comment count</label>
        <input name="sort" type="radio" className="sort-radio" id="comment_count" value="comment_count" onClick={handleSort}  ></input>
        </div>
        <div className="label-radio-container">
        <label className="sort-label"  htmlFor="votes">Votes</label>
        <input name="sort" type="radio" className="sort-radio" id="votes" value="votes" onClick={handleSort} ></input>
        <ArrowDownIcon value='desc' onClick={handleDesc}/>
        <ArrowUpIcon value='asc' onClick={handleAsc}/>
        </div>
    </div>
    )
}

export default SortBy