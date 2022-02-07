import '../styles/style.scss'

const Result = () => {
    return (
        <div className='result-card'>
            <div className="main-info">
                <h4 className="result-info result-title">Puppies Inc.</h4>
                <p className="result-info result-distance">1.4 miles away</p>
                {/* Put these in modal that opens */}
                <p className="result-info result-address">555 Main St</p>
                <p className="result-info result-phone">555-123-4567</p>
                <p className="result-info result-site">www.animalrescue.com</p> 
            </div>
           <button className="open-modal">More Info</button>
        </div>
    )
}

export default Result