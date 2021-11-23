import '../styles/style.scss'

const Result = () => {
    return (
        <div className='result-card'>
            <div className="main-info">
                <h4 className="result-title">Puppies Inc.</h4>
                <p className="result-distance">1.4 miles away</p>
            </div>
           <button className="open-modal">More Info</button>
        </div>
    )
}

export default Result
