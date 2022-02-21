import {useState, useEffect} from 'react'
import Result from "./Result"
import '../styles/style.scss'


const Results = () => {
    const [results, setResults] = useState([]);


    return (
        <div className='results-section'>
            <Result />
            <Result />
        </div>
    )
}

export default Results
