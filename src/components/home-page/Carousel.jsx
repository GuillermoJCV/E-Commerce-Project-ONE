// src/components/Carousel.jsx
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import '../../styles/homePage.css';

const Carousel = ({ items, renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 6;

    const nextItem = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const prevItem = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    }, [items.length]);

    useEffect(() => {
        const intervalId = setInterval(nextItem, 3000);
        return () => clearInterval(intervalId);
    }, [nextItem]);

    const displayedItems = [];
    for (let i = 0; i < itemsPerView; i++) {
        displayedItems.push(items[(currentIndex + i) % items.length]);
    }

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={prevItem}>
                <BsChevronLeft />
            </button>
            <div className="carousel-content">
                {displayedItems.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {renderItem(item)}
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextItem}>
                <BsChevronRight />
            </button>
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    renderItem: PropTypes.func.isRequired,
};

export default Carousel;



/*import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../../styles/homePage.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({ items, renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 5;

    const nextItem = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const prevItem = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    }, [items.length]);

    useEffect(() => {
        const intervalId = setInterval(nextItem, 3000);
        return () => clearInterval(intervalId);
    }, [nextItem]);

    const displayedItems = [];
    for (let i = 0; i < itemsPerView; i++) {
        displayedItems.push(items[(currentIndex + i) % items.length]);
    }

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={prevItem}>
            <BsChevronLeft />
            </button>
            <div className="carousel-content">
                {displayedItems.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {renderItem(item)}
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextItem}>
            <BsChevronRight />
            </button>
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    renderItem: PropTypes.func.isRequired,
};

export default Carousel;*/