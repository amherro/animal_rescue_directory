import '../styles/style.scss'
import topPhoto from '../images/showcase-img.jpg';

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="showcase-container">
                <div className="tag-lines">
                    <h2>Find Your Next Rescue</h2>
                    <h3>We are the #1 site to find the animal rescue nearest you</h3>
                </div>
                <img src={topPhoto} alt="Dog and cat" />
            </div>
        </section>
    )
}

export default Showcase
