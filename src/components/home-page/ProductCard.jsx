import PropTypes from 'prop-types';

const ProductCard = ({ name, price, image }) => {
    return (
        <article className="card">
            <figure className="card">
                <img className="card-container--img" height="60px" src={image} alt={name} />
                <figcaption className="card-container--info">
                    <p className="card-container--title">{name}</p>
                    <div className="card-container--value">
                        <p>$ {price}</p>
                    </div>
                </figcaption>
            </figure>
        </article>
    );
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductCard;
