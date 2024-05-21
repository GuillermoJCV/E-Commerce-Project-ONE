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

