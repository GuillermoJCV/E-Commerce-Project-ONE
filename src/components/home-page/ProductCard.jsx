import PropTypes from 'prop-types';
import '../../styles/homePage.css';

function ProductCard({ name,  image }) {
    return (
        <article className="product__card">
            <figure>
                <img
                    className="product__card-img"
                    src={image}
                    alt={name}
                />
                <figcaption className="product__card-info">
                    <p className="product__card-category">Producto</p>
                    <p className="product__card-title">{name}</p>
                </figcaption>
            </figure>
        </article>
    );
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductCard;
