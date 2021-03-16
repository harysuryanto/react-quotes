import img from '../images/img.png';
import img2 from '../images/img2.png';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img} alt="First slide" />
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="d-flex justify-content-center mx-auto mb-4">
                {/* Button Previous */}
                <button className="btn btn-light p-2">
                    <i class="fas fa-caret-left"></i>
                    Previous
                </button>
                {/* Button Pause/Resume */}
                <button className="btn btn-light">
                    <i className="fas fa-play"></i>
                    Pause/Resume
                </button>
                {/* Button Next */}
                <button className="btn btn-light">
                    <i className="fas fa-caret-right"></i>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Carousel;