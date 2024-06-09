import PropTypes from 'prop-types';
import '../../styles/productInfoCard.css';

function ProductCard({ name,  image, price }) {
    return (
        <article className="product__info__card">
            <figure>
                <img
                    className="card-container--img"
                    src={image}
                    alt={name}
                />
                <figcaption className="card-container--info">
                    <p className="card__category">Tipo de producto</p>
                    <p className="card__title">{name}</p>
                    <p className="card__price">{price}</p>
                </figcaption>
            </figure>
        </article>
    );
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default ProductCard;
