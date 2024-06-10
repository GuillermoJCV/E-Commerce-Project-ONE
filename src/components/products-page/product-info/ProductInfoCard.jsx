import PropTypes from 'prop-types';
import '../../../styles/productInfo.css';

function ProductInfoCard({ name,  image, price }) {
    return (
        <article className="card">
            <figure>
                <img
                    className="card-container--img"
                    src={image}
                    alt={name}
                />
                <figcaption className="card-container--info">
                    <p className="card-category">Tipo de Producto</p>
                    <p className="card-title">{name}</p>
                    <p className="card-price">{price}</p>
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
