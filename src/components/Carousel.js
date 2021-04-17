import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faStepForward, faPlay, faPause, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

/* import img from '../images/img.png';
import img2 from '../images/img2.png'; */

const Carousel = () => {
    const styleCarousel = {
        backgroundColor: '#dddddd',
        backgroundImage: 'url(https://images.unsplash.com/photo-1511988578842-d8abe0f6351a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
        backgroundSize: 'cover',
        margin: '20px 0px',
        minHeight: '200px',
        padding: '50px 10%',
        width: '100%',
    }
    /* const styleCarouselItem = {
        textAlign: 'center',
    } */

    const quotes = [
        {
            id: 4,
            name: 'Elon Musk',
            quote: 'If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not.'
        },
        {
            id: 5,
            name: 'Kemal',
            quote: '2 Awkwkwk 🐱‍🏍'
        },
        {
            id: 4,
            name: 'Hary',
            quote: '3 Coba aja dulu'
        },
        {
            id: 5,
            name: 'Kemal',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et sollicitudin ac orci phasellus egestas tellus rutrum.'
        }
    ];

    const [currentQuotesIndex, setCurrentQuotesIndex] = useState(0);

    const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

    const [currentSecond, setCurrentSecond] = useState(0);

    const handlePreviousQuote = () => {
        if (currentQuotesIndex > 0) {
            // Change to previous quote if previous quote exists
            setCurrentQuotesIndex(currentQuotesIndex - 1);
        } else {
            // Get back to last quote if previous quote doesn't exist
            setCurrentQuotesIndex(quotes.length - 1);
        }
    }

    const handleNextQuote = () => {
        if (currentQuotesIndex < quotes.length - 1) {
            // Change to next quote if next quote exists
            setCurrentQuotesIndex(currentQuotesIndex + 1);
        } else {
            // Get back to first quote if next quote doesn't exist
            setCurrentQuotesIndex(0);
        }
    }

    const handleTogglePauseCarousel = () => {
        if (isCarouselPlaying) {
            // Pause the carousel
            // clearInterval(interval);
        } else {
            // Play the carousel
        }
    }
    
    useEffect(() =>{
        /* var carouselInterval = 5; // seconds
        var interval = setInterval(() => {
            // handleNextQuote();
            
            if (currentSecond < carouselInterval) {
                // Add 1 second
                setCurrentSecond(currentSecond + 1);
                handleNextQuote();
                console.log('masuk if');
            } else {
                // Get back to second 0
                setCurrentSecond(0);
                console.log('masuk else');
            }

            console.log(currentSecond, '<', carouselInterval, currentSecond < carouselInterval);
        }, 1000);
        return () => interval; */
    }, []);

    return (
        <div>
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
                    className="btn btn-light p-2"
                    onClick={handlePreviousQuote}
                >
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                {/* Button Pause/Resume */}
                <button 
                    className="btn btn-light"
                    onClick={handleTogglePauseCarousel}
                >
                    <FontAwesomeIcon icon={faPlay} /> / <FontAwesomeIcon icon={faPause} />
                </button>
                {/* Button Next */}
                <button 
                    className="btn btn-light"
                    onClick={handleNextQuote}
                >
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
            </div>

            {/* Show current quote */}
            <p>Quotes index { currentQuotesIndex }</p>
            
            {/* Show current second */}
            <p>Current second { currentSecond }</p>

        </div>
    );
}

export default Carousel;