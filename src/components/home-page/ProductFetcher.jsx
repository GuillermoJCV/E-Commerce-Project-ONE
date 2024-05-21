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