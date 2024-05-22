import { useState, useEffect, useCallback } from 'react';
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

export default Carousel;



{/* 
import { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../../styles/homePage.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


function Carousel({ items, renderItem }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const itemCount = items.length;
    const intervalRef = useRef(null);

    const nextItem = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % itemCount);
    }, [itemCount, itemsPerPage]);

    const prevItem = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + itemCount) % itemCount);
    }, [itemCount, itemsPerPage]);

    const stopAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    const startAutoPlay = useCallback(() => {
        stopAutoPlay(); // Clear any existing interval
        intervalRef.current = setInterval(nextItem, 3000); // Change image every 3 seconds
    }, [nextItem, stopAutoPlay]);

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, [startAutoPlay, stopAutoPlay]);

    if (!Array.isArray(items) || itemCount === 0) return null;

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={() => { stopAutoPlay(); prevItem(); }}><BsChevronLeft /></button>
            <div className="carousel-content">
                {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {renderItem(item)}
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={() => { stopAutoPlay(); nextItem(); }}><BsChevronRight /></button>
        </div>
    );
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
};

export default Carousel;
*/}

{/* 
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/homePage.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Carousel({ items, renderItem }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsPerPage = 7;
    const itemCount = items.length;

    if (!Array.isArray(items) || itemCount === 0) return null;

    const nextItem = () => {
        setCurrentIndex((currentIndex + itemsPerPage) % itemCount);
    };

    const prevItem = () => {
        setCurrentIndex((currentIndex - itemsPerPage + itemCount) % itemCount);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={prevItem}><BsChevronLeft /></button>
            <div className="carousel-content">
                {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {renderItem(item)}
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextItem}><BsChevronRight /></button>
        </div>
    );
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
};

export default Carousel;
*/}