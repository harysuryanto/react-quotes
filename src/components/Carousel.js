import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faStepForward, faPlay, faPause, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
    const styleCarousel = {
        backgroundColor: '#000',
        backgroundImage: 'url(https://images.unsplash.com/photo-1511988578842-d8abe0f6351a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
        backgroundSize: 'cover',
        margin: '20px 0px',
        minHeight: '200px',
        padding: '50px 10%',
        width: '100%',
        borderRadius: '20px',
    }

    const quotes = props.data;

    const [currentQuotesIndex, setCurrentQuotesIndex] = useState(0);

    const [isCarouselPlaying, setIsCarouselPlaying] = useState(false);

    const handlePreviousQuote = () => {
        // Only do the action if quote exists
        if (quotes.length > 0) {
            if (currentQuotesIndex > 0) {
                // Change to previous quote if previous quote exists
                setCurrentQuotesIndex(currentQuotesIndex - 1);
            } else {
                // Get back to last quote if previous quote doesn't exist
                setCurrentQuotesIndex(quotes.length - 1);
            }
        }
    }

    const handleNextQuote = () => {
        // Only do the action if quote exists
        if (quotes.length > 0) {
            if (currentQuotesIndex < quotes.length - 1) {
                // Change to next quote if next quote exists
                setCurrentQuotesIndex(currentQuotesIndex + 1);
                console.log('[handleNextQuote()]: next quote');
            } else {
                // Get back to first quote if next quote doesn't exist
                setCurrentQuotesIndex(0);
                console.log('[handleNextQuote()]: back to first quote');
            }
        }
    }

    const handleTogglePauseCarousel = () => {
        if (isCarouselPlaying) {
            setIsCarouselPlaying(false);

            // Pause the carousel
            // clearInterval(interval);
        } else {
            setIsCarouselPlaying(true);
            
            // Play the carousel
        }

        // alert('Nothing happens... yet.');
    }

    useEffect(() => {
        console.log('Carousel.js rerenderd');

        var counter = 0;
        var carouselInterval = 5; // seconds

        console.log('Waktu dimulai dari 0');

        // Deactivated because it causes error when deleting items few times
        /* setInterval(() => {
            console.log('Waktu sekarang: ', counter);

            // Add 1 second
            counter++;
            console.log('+1 detik');

            if (counter >= carouselInterval) {
                // Reset the time, get back to second 0
                counter = 0;
                console.log('reset waktu & ganti quote');

                // Show next quote
                handleNextQuote();
            }
        }, 1000); */
    }, []);

    return (
        <div>
            {/* Show current quote */}
            <p>Quotes index {currentQuotesIndex}</p>

            {/* Carousel */}
            <div style={styleCarousel}>
                <blockquote className="blockquote">
                    <FontAwesomeIcon icon={faQuoteLeft} color={"white"} />

                    <p className="text-white h2 mb-0 font-italic">
                        {quotes[currentQuotesIndex].quote}
                    </p>

                    <FontAwesomeIcon icon={faQuoteRight} color={"white"} />

                    <footer className="blockquote-footer text-light">
                        {quotes[currentQuotesIndex].name}
                    </footer>
                </blockquote>
            </div>

            {/* Carousel Controller */}
            <div className="d-flex justify-content-center mx-auto mb-4">
                {/* Button Previous */}
                <button
                    className="btn"
                    onClick={handlePreviousQuote}
                >
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                {/* Button Pause/Resume */}
                <button
                    className="btn"
                    onClick={handleTogglePauseCarousel}
                >
                    {isCarouselPlaying === true && (
                        <FontAwesomeIcon icon={faPause} />
                    )}
                    {isCarouselPlaying === false && (
                        <FontAwesomeIcon icon={faPlay} />
                    )}
                    
                </button>
                {/* Button Next */}
                <button
                    className="btn"
                    onClick={handleNextQuote}
                >
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
            </div>

            {quotes.length === 0 && (
                <p>No quotes</p>
            )}

        </div>
    );
}

export default Carousel;