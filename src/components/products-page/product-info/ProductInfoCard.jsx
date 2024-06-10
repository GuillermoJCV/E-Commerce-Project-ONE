import PropTypes from 'prop-types';
import '../../../styles/productInfo.css';

function ProductInfoCard({ name,  image, price }) {
    return (
        <article className="card__container">
            <figure className='container-img'>
                <img
                    className="card-container-img"
                    src={image}
                    alt={name}
                />
                <figcaption className="card-container-info">
                    <p className="card__category">Producto</p>
                    <p className="card__title">{name}</p>
                    <p className="card__price">{price}</p>
                </figcaption>
            </figure>
        </article>
    );
}

ProductInfoCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default ProductInfoCard;
