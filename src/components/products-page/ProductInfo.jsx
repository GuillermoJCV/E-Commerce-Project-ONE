import { useParams } from 'react-router-dom';
import { productList } from '../../services/productServices';
import { useEffect, useState } from 'react';
import '../../styles/productInfo.css';

export default function ProductInfo() {
    const { productId } = useParams();

    // Obtener la lista de productos y buscar el producto por su ID
    const [product, setProduct] = useState(null);

    useEffect(() => {
        productList()
            .then((products) => {
                const foundProduct = products.find((item) => item.id === productId);
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    throw new Error('No se encontró el producto.');
                }
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [productId]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    return (
        <main>
            <div className="product__info">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p>Precio: {product.price}</p>
                <p>Descripción: {product.description}</p>
            </div>
        </main>
    );
}