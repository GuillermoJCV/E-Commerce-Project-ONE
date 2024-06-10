import { useState } from 'react';
import '../../../styles/addToCartButton.css';

export default function AddToCartButton() {
    const [isChecked, setIsChecked] = useState(false);

    const handleButtonClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <button
            className={`button__car ${isChecked ? 'checked' : ''}`}
            onClick={handleButtonClick}
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleButtonClick}
                className="checkbox"
            />
            <span className="checkmark">&#10003;</span>
            <p>
                Agregar al carrito
            </p>
        </button>
    );
}
