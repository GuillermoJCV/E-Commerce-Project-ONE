import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { productList } from '../../services/productServices';

const ProductFetcher = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const listProducts = await productList();
                if (Array.isArray(listProducts)) {
                    setProducts(listProducts);
                } else {
                    throw new Error('La API no devolvió una lista de productos válida');
                }
            } catch (err) {
                setError('No fue posible cargar la lista de productos');
                console.error('Error fetching products:', err);
            }
        };
        fetchProducts();
    }, []);

    return children(products, error);
};

ProductFetcher.propTypes = {
    children: PropTypes.func.isRequired,
};

export default ProductFetcher;





/*import { Component } from 'react';
import PropTypes from 'prop-types';
import { productList } from '../../services/productServices';

class ProductFetcher extends Component {
    state = {
        products: [],
        error: null
    };

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = async () => {
        try {
            const listProducts = await productList();
            if (Array.isArray(listProducts)) {
                this.setState({ products: listProducts });
            } else {
                throw new Error('La API no devolvió una lista de productos válida');
            }
        } catch (err) {
            this.setState({ error: 'No fue posible cargar la lista de productos' });
            console.error('Error fetching products:', err);
        }
    };

    render() {
        return this.props.children(this.state.products, this.state.error);
    }
}

ProductFetcher.propTypes = {
    children: PropTypes.func.isRequired
};

export default ProductFetcher;
*/