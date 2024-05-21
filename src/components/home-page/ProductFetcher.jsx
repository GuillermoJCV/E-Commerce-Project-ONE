import { Component } from 'react';
import PropTypes from 'prop-types';

class ProductFetcher extends Component {
    state = {
        products: [],
        error: null,
    };

    componentDidMount() {
        fetch('https://663bae1afee6744a6ea28e1a.mockapi.io/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch(() => this.setState({ error: 'Error fetching products' }));
    }

    render() {
        const { children } = this.props;
        const { products, error } = this.state;
        return children(products, error);
    }
}

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