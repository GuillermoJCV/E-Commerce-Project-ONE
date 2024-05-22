// src/components/ProductFetcher.jsx
import { Component } from 'react';
import PropTypes from 'prop-types';
import { productList } from '../../services/productServices.js';

class ProductFetcher extends Component {
    state = {
        products: [],
        error: null,
    };

    componentDidMount() {
        productList()
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
