import PropTypes from 'prop-types';
import '../../styles/homePage.css';

function ProductCard({ name, price, image }) {
    return (
        <article className="card">
            <figure>
                <img
                    className="card-container--img"
                    src={image}
                    alt={name}
                />
                <figcaption className="card-container--info">
                    <p className="card-category">Producto</p>
                    <p className="card-title">{name}</p>
                    <p className="card-price">${price}</p>
                </figcaption>
            </figure>
        </article>
    );
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductCard;
